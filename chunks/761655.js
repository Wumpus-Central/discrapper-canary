let i = n(689118);
function r(e) {
    this._reporterState = {
        obj: null,
        path: [],
        options: e || {},
        errors: []
    };
}
function a(e, t) {
    (this.path = e), this.rethrow(t);
}
(t.Reporter = r),
    (r.prototype.isError = function (e) {
        return e instanceof a;
    }),
    (r.prototype.save = function () {
        let e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        };
    }),
    (r.prototype.restore = function (e) {
        let t = this._reporterState;
        (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
    }),
    (r.prototype.enterKey = function (e) {
        return this._reporterState.path.push(e);
    }),
    (r.prototype.exitKey = function (e) {
        let t = this._reporterState;
        t.path = t.path.slice(0, e - 1);
    }),
    (r.prototype.leaveKey = function (e, t, n) {
        let i = this._reporterState;
        this.exitKey(e), null !== i.obj && (i.obj[t] = n);
    }),
    (r.prototype.path = function () {
        return this._reporterState.path.join('/');
    }),
    (r.prototype.enterObject = function () {
        let e = this._reporterState,
            t = e.obj;
        return (e.obj = {}), t;
    }),
    (r.prototype.leaveObject = function (e) {
        let t = this._reporterState,
            n = t.obj;
        return (t.obj = e), n;
    }),
    (r.prototype.error = function (e) {
        let t;
        let n = this._reporterState,
            i = e instanceof a;
        if (
            ((t = i
                ? e
                : new a(
                      n.path
                          .map(function (e) {
                              return '[' + JSON.stringify(e) + ']';
                          })
                          .join(''),
                      e.message || e,
                      e.stack
                  )),
            !n.options.partial)
        )
            throw t;
        return i || n.errors.push(t), t;
    }),
    (r.prototype.wrapResult = function (e) {
        let t = this._reporterState;
        return t.options.partial
            ? {
                  result: this.isError(e) ? null : e,
                  errors: t.errors
              }
            : e;
    }),
    i(a, Error),
    (a.prototype.rethrow = function (e) {
        if (((this.message = e + ' at: ' + (this.path || '(shallow)')), Error.captureStackTrace && Error.captureStackTrace(this, a), !this.stack))
            try {
                throw Error(this.message);
            } catch (e) {
                this.stack = e.stack;
            }
        return this;
    });

let i = r(689118);
function a(e) {
    this._reporterState = {
        obj: null,
        path: [],
        options: e || {},
        errors: []
    };
}
function o(e, n) {
    (this.path = e), this.rethrow(n);
}
(n.Reporter = a),
    (a.prototype.isError = function (e) {
        return e instanceof o;
    }),
    (a.prototype.save = function () {
        let e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        };
    }),
    (a.prototype.restore = function (e) {
        let n = this._reporterState;
        (n.obj = e.obj), (n.path = n.path.slice(0, e.pathLen));
    }),
    (a.prototype.enterKey = function (e) {
        return this._reporterState.path.push(e);
    }),
    (a.prototype.exitKey = function (e) {
        let n = this._reporterState;
        n.path = n.path.slice(0, e - 1);
    }),
    (a.prototype.leaveKey = function (e, n, r) {
        let i = this._reporterState;
        this.exitKey(e), null !== i.obj && (i.obj[n] = r);
    }),
    (a.prototype.path = function () {
        return this._reporterState.path.join('/');
    }),
    (a.prototype.enterObject = function () {
        let e = this._reporterState,
            n = e.obj;
        return (e.obj = {}), n;
    }),
    (a.prototype.leaveObject = function (e) {
        let n = this._reporterState,
            r = n.obj;
        return (n.obj = e), r;
    }),
    (a.prototype.error = function (e) {
        let n;
        let r = this._reporterState,
            i = e instanceof o;
        if (
            ((n = i
                ? e
                : new o(
                      r.path
                          .map(function (e) {
                              return '[' + JSON.stringify(e) + ']';
                          })
                          .join(''),
                      e.message || e,
                      e.stack
                  )),
            !r.options.partial)
        )
            throw n;
        return !i && r.errors.push(n), n;
    }),
    (a.prototype.wrapResult = function (e) {
        let n = this._reporterState;
        return n.options.partial
            ? {
                  result: this.isError(e) ? null : e,
                  errors: n.errors
              }
            : e;
    }),
    i(o, Error),
    (o.prototype.rethrow = function (e) {
        if (((this.message = e + ' at: ' + (this.path || '(shallow)')), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack))
            try {
                throw Error(this.message);
            } catch (e) {
                this.stack = e.stack;
            }
        return this;
    });

r.d(n, {
    CF: function () {
        return l;
    },
    Es: function () {
        return s;
    },
    z5: function () {
        return u;
    }
});
var i = r(47120);
var a = r(15729),
    o = r(731965);
let s = (0, a.U)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function l(e) {
    (0, o.j)(() => {
        s.setState((n) =>
            null != n.currentToast
                ? {
                      ...n,
                      queuedToasts: [...n.queuedToasts, e]
                  }
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function u() {
    (0, o.j)(() => {
        s.setState((e) => {
            let n = e.queuedToasts;
            return n.length > 0
                ? {
                      currentToast: n[0],
                      queuedToasts: n.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}

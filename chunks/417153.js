n.d(t, {
    CF: () => s,
    Es: () => a,
    z5: () => o
}),
    n(47120);
var i = n(15729),
    r = n(731965);
let a = (0, i.U)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function s(e) {
    (0, r.j)(() => {
        a.setState((t) =>
            null != t.currentToast
                ? {
                      ...t,
                      queuedToasts: [...t.queuedToasts, e]
                  }
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function o() {
    (0, r.j)(() => {
        a.setState((e) => {
            let t = e.queuedToasts;
            return t.length > 0
                ? {
                      currentToast: t[0],
                      queuedToasts: t.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}

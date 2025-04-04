n.d(t, {
    PE: () => u,
    a5: () => c,
    rb: () => l
});
var r = n(230383),
    i = n(731965),
    o = n(585483),
    a = n(981631);
let s = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, r.U)((e) => s),
    c = (e) => {
        (0, i.j)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    u = (e) => {
        (0, i.j)(() => l.setState({ shouldShowWarning: e })), e && o.S.dispatch(a.CkL.EMPHASIZE_NOTICE);
    };

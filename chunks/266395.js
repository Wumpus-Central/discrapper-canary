n.d(t, {
    PE: () => u,
    a5: () => c,
    rb: () => l
});
var r = n(290486),
    i = n(731965),
    a = n(585483),
    o = n(981631);
let s = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, r.U)((e) => s),
    c = (e) => {
        (0, i.j)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    u = (e) => {
        (0, i.j)(() => l.setState({ shouldShowWarning: e })), e && a.S.dispatch(o.CkL.EMPHASIZE_NOTICE);
    };

n.d(t, {
    PE: () => c,
    a5: () => u,
    rb: () => l
});
var i = n(15729),
    r = n(731965),
    a = n(585483),
    s = n(981631);
let o = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, i.U)((e) => o),
    u = (e) => {
        (0, r.j)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    c = (e) => {
        (0, r.j)(() => l.setState({ shouldShowWarning: e })), e && a.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
    };

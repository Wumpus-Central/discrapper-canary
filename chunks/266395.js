r.d(n, {
    PE: function () {
        return d;
    },
    a5: function () {
        return c;
    },
    rb: function () {
        return u;
    }
});
var i = r(15729),
    a = r(731965),
    o = r(585483),
    s = r(981631);
let l = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    u = (0, i.U)((e) => l),
    c = (e) => {
        (0, a.j)(() => u.setState({ hasUnsubmittedChanges: e }));
    },
    d = (e) => {
        (0, a.j)(() => u.setState({ shouldShowWarning: e })), e && o.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
    };

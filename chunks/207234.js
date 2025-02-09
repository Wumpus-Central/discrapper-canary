t.d(n, {
    M: () => a,
    a: () => o
});
var i = t(392711),
    r = t.n(i),
    s = t(585483),
    l = t(981631);
let o = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (s.S.dispatch(l.CkL.TOGGLE_INBOX), !1)
    },
    a = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: r().debounce(
            () => {
                if (s.S.hasSubscribers(l.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return s.S.dispatch(l.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };

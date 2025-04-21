n.d(t, {
    M: () => o,
    a: () => a
});
var i = n(392711),
    r = n.n(i),
    s = n(585483),
    l = n(981631);
let a = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (s.S.dispatch(l.CkL.TOGGLE_INBOX), !1)
    },
    o = {
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

n.d(t, {
    M: () => o,
    a: () => l
});
var r = n(392711),
    i = n.n(r),
    s = n(585483),
    a = n(981631);
let l = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (s.S.dispatch(a.CkL.TOGGLE_INBOX), !1)
    },
    o = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: i().debounce(
            () => {
                if (s.S.hasSubscribers(a.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return s.S.dispatch(a.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };

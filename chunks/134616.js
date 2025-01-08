n.d(t, {
    u: function () {
        return u;
    }
});
var s = n(513431),
    i = n(481060),
    r = n(40851),
    o = n(574254),
    l = n(585483),
    a = n(547420),
    c = n(981631);
let u = {
    POP_LAYER: {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, i.isInDndMode)()) return !1;
            if (l.S.hasSubscribers(c.CkL.CALL_DECLINE)) return l.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (o.Z.close()) return !1;
            if ((0, s.k)(e.target)) {
                let t = (0, r.J5)(e.target);
                if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE)) return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (l.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return l.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            l.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
        }
    },
    ...a.ZP
};

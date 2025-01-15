s.d(t, {
    u: function () {
        return d;
    }
});
var n = s(513431),
    i = s(481060),
    r = s(40851),
    o = s(574254),
    a = s(585483),
    l = s(547420),
    c = s(981631);
let d = {
    POP_LAYER: {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, i.isInDndMode)()) return !1;
            if (a.S.hasSubscribers(c.CkL.CALL_DECLINE)) return a.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (o.Z.close()) return !1;
            if ((0, n.k)(e.target)) {
                let t = (0, r.J5)(e.target);
                if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE)) return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (a.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return a.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            a.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
        }
    },
    ...l.ZP
};

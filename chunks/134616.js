n.d(t, { u: () => u });
var i = n(374470),
    l = n(481060),
    r = n(40851),
    s = n(574254),
    a = n(585483),
    o = n(547420),
    c = n(981631);
let u = {
    POP_LAYER: {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, l.Vbw)()) return !1;
            if (a.S.hasSubscribers(c.CkL.CALL_DECLINE)) return a.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (s.Z.close()) return !1;
            if ((0, i.k)(e.target)) {
                let t = (0, r.J5)(e.target);
                if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE)) return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (a.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return a.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            a.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
        }
    },
    ...o.ZP
};

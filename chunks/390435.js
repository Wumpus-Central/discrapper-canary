n.d(t, { w: () => c });
var i = n(621466),
    a = n(425763),
    r = n(267102),
    s = n(712687),
    l = n(625494),
    o = n(406975),
    d = n(652215);
let c = {
    POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, a.ny)()) return !1;
            if (l._.hasSubscribers(d.jej.CALL_DECLINE)) return l._.dispatch(d.jej.CALL_DECLINE), !1;
            if (s.A.close()) return !1;
            if ((0, i.vq)(e.target)) {
                let t = (0, r.mU)(e.target);
                if (t?.hasSubscribers(d.jej.POPOUT_CLOSE)) return t.dispatch(d.jej.POPOUT_CLOSE), !1;
            }
            if (l._.hasSubscribers(d.jej.MODAL_CLOSE)) return l._.dispatch(d.jej.MODAL_CLOSE), !1;
            l._.dispatch(d.jej.LAYER_POP_ESCAPE_KEY);
        },
    },
    ...o.Ay,
};

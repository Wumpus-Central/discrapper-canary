n.d(t, { w: () => c });
var i = n(621466),
    l = n(425763),
    s = n(267102),
    a = n(712687),
    r = n(203982),
    o = n(406975),
    d = n(652215);
let c = {
    POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, l.ny)()) return !1;
            if (r._.hasSubscribers(d.jej.CALL_DECLINE)) return r._.dispatch(d.jej.CALL_DECLINE), !1;
            if (a.A.close()) return !1;
            if ((0, i.vq)(e.target)) {
                let t = (0, s.mU)(e.target);
                if (t?.hasSubscribers(d.jej.POPOUT_CLOSE)) return t.dispatch(d.jej.POPOUT_CLOSE), !1;
            }
            if (r._.hasSubscribers(d.jej.MODAL_CLOSE)) return r._.dispatch(d.jej.MODAL_CLOSE), !1;
            r._.dispatch(d.jej.LAYER_POP_ESCAPE_KEY);
        },
    },
    ...o.Ay,
};

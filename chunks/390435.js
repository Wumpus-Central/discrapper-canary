n.d(t, { w: () => d });
var i = n(621466),
    l = n(397927),
    s = n(267102),
    a = n(712687),
    r = n(203982),
    o = n(406975),
    c = n(652215);
let d = {
    POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, l.ny_)()) return !1;
            if (r._.hasSubscribers(c.jej.CALL_DECLINE)) return r._.dispatch(c.jej.CALL_DECLINE), !1;
            if (a.A.close()) return !1;
            if ((0, i.vq)(e.target)) {
                let t = (0, s.mU)(e.target);
                if (t?.hasSubscribers(c.jej.POPOUT_CLOSE)) return t.dispatch(c.jej.POPOUT_CLOSE), !1;
            }
            if (r._.hasSubscribers(c.jej.MODAL_CLOSE)) return r._.dispatch(c.jej.MODAL_CLOSE), !1;
            r._.dispatch(c.jej.LAYER_POP_ESCAPE_KEY);
        },
    },
    ...o.Ay,
};

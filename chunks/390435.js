"use strict";
n.d(t, { w: () => d });
var i = n(621466),
    s = n(397927),
    l = n(267102),
    r = n(712687),
    a = n(203982),
    o = n(406975),
    c = n(652215);
let d = {
    POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, s.ny_)()) return !1;
            if (a._.hasSubscribers(c.jej.CALL_DECLINE)) return a._.dispatch(c.jej.CALL_DECLINE), !1;
            if (r.A.close()) return !1;
            if ((0, i.vq)(e.target)) {
                let t = (0, l.mU)(e.target);
                if (t?.hasSubscribers(c.jej.POPOUT_CLOSE)) return t.dispatch(c.jej.POPOUT_CLOSE), !1;
            }
            if (a._.hasSubscribers(c.jej.MODAL_CLOSE)) return a._.dispatch(c.jej.MODAL_CLOSE), !1;
            a._.dispatch(c.jej.LAYER_POP_ESCAPE_KEY);
        },
    },
    ...o.Ay,
};

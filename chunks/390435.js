"use strict";
n.d(t, { w: () => c });
var i = n(621466),
    r = n(425763),
    s = n(267102),
    a = n(712687),
    o = n(625494),
    l = n(406975),
    u = n(652215);
let c = {
    POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, r.ny)()) return !1;
            if (o._.hasSubscribers(u.jej.CALL_DECLINE)) return o._.dispatch(u.jej.CALL_DECLINE), !1;
            if (a.A.close()) return !1;
            if ((0, i.vq)(e.target)) {
                let t = (0, s.mU)(e.target);
                if (t?.hasSubscribers(u.jej.POPOUT_CLOSE)) return t.dispatch(u.jej.POPOUT_CLOSE), !1;
            }
            if (o._.hasSubscribers(u.jej.MODAL_CLOSE)) return o._.dispatch(u.jej.MODAL_CLOSE), !1;
            o._.dispatch(u.jej.LAYER_POP_ESCAPE_KEY);
        },
    },
    ...l.Ay,
};

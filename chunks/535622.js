"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(732139);
let o = (e) => {
        switch (e) {
            case s.R2.RECENT:
                return a.O4;
            case s.R2.FAVORITES:
                return a.Gg5;
            case s.R2.TOP_GUILD_EMOJI:
                return a.OR;
            case s.R2.PEOPLE:
                return a.nm2;
            case s.R2.NATURE:
                return a.pPb;
            case s.R2.FOOD:
                return a.iUc;
            case s.R2.ACTIVITY:
                return a._xR;
            case s.R2.TRAVEL:
                return a.hTD;
            case s.R2.OBJECTS:
                return a.DSD;
            case s.R2.SYMBOLS:
                return a.C3E;
            case s.R2.FLAGS:
                return a.iFK;
            case s.R2.PREMIUM_UPSELL:
                return a.tvc;
            case s.R2.SOUNDMOJI:
                return a.JMI;
            default:
                return;
        }
    },
    l = i.memo(function (e) {
        let { categoryId: t, ...n } = e,
            i = o(t);
        return null == i ? null : (0, r.jsx)(i, { color: "currentColor", ...n });
    });

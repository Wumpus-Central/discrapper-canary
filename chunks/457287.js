"use strict";
n.d(t, { f: () => a, A: () => o });
var i = n(627968);
n(64700);
var r = n(691885),
    s = n(985018);
function a(e) {
    let { currencies: t, className: n, children: r } = e;
    return t.length < 2 ? null : (0, i.jsx)("div", { className: n, children: r });
}
let o = function (e) {
    let { label: t, currencies: n, onChange: a, selectedCurrency: o, disabled: l = !1 } = e;
    if (n.length < 2 || null == o) return null;
    let d = n.map((e, t) => ({
        id: t.toString(),
        value: e,
        label: `${e.toUpperCase()} - ${(function (e) {
            switch (e) {
                case "brl":
                    return s.intl.string(s.t.qEyr9g);
                case "pln":
                    return s.intl.string(s.t.eAdNmS);
                case "try":
                    return s.intl.string(s.t.J05KNY);
                case "usd":
                    return s.intl.string(s.t.kJGVtL);
                case "aud":
                    return s.intl.string(s.t.ylmkM5);
                case "pen":
                    return s.intl.string(s.t["sKR+OL"]);
                case "php":
                    return s.intl.string(s.t["0p6FTm"]);
                case "ars":
                    return s.intl.string(s.t.GTI3B6);
                case "cop":
                    return s.intl.string(s.t["/FnP7L"]);
                case "clr":
                    return s.intl.string(s.t["BK/Van"]);
                case "jpy":
                    return s.intl.string(s.t.QKSoIh);
                case "idr":
                    return s.intl.string(s.t.UBrRGq);
                case "vnd":
                    return s.intl.string(s.t.mEwyko);
                case "thb":
                    return s.intl.string(s.t["9W3Guf"]);
                case "myr":
                    return s.intl.string(s.t.MOaho3);
                case "krw":
                    return s.intl.string(s.t["20VnAz"]);
                case "mxn":
                    return s.intl.string(s.t.t2RLng);
                case "bgn":
                    return s.intl.string(s.t.EhetGH);
                case "czk":
                    return s.intl.string(s.t.dWTAXT);
                case "dkk":
                    return s.intl.string(s.t.a9hHzp);
                case "huf":
                    return s.intl.string(s.t.abWUUC);
                case "ron":
                    return s.intl.string(s.t.C7WDXG);
                case "sek":
                    return s.intl.string(s.t.Z0ozta);
                case "eur":
                    return s.intl.string(s.t["uhxR+U"]);
                case "gbp":
                    return s.intl.string(s.t.RKkD0b);
                default:
                    return "";
            }
        })(e)}`,
    }));
    return (0, i.jsx)(r.l, {
        selectionMode: "single",
        label: t,
        value: o,
        options: d,
        onSelectionChange: (e) => {
            null != e && a(e);
        },
        disabled: l,
    });
};

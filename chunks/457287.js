t.d(s, { f: () => i, A: () => l });
var n = t(477900);
t(582128);
var r = t(691885),
    a = t(375708);
function i(e) {
    let { currencies: s, className: t, children: r } = e;
    return s.length < 2 ? null : (0, n.jsx)("div", { className: t, children: r });
}
let l = function (e) {
    let { label: s, currencies: t, onChange: i, selectedCurrency: l, disabled: c = !1 } = e;
    if (t.length < 2 || null == l) return null;
    let u = t.map((e, s) => ({
        id: s.toString(),
        value: e,
        label: `${e.toUpperCase()} - ${(function (e) {
            switch (e) {
                case "brl":
                    return a.intl.string(a.t.qEyr9g);
                case "pln":
                    return a.intl.string(a.t.eAdNmS);
                case "try":
                    return a.intl.string(a.t.J05KNY);
                case "usd":
                    return a.intl.string(a.t.kJGVtL);
                case "aud":
                    return a.intl.string(a.t.ylmkM5);
                case "pen":
                    return a.intl.string(a.t["sKR+OL"]);
                case "php":
                    return a.intl.string(a.t["0p6FTm"]);
                case "ars":
                    return a.intl.string(a.t.GTI3B6);
                case "cop":
                    return a.intl.string(a.t["/FnP7L"]);
                case "clp":
                    return a.intl.string(a.t["TPV/a1"]);
                case "jpy":
                    return a.intl.string(a.t.QKSoIh);
                case "idr":
                    return a.intl.string(a.t.UBrRGq);
                case "vnd":
                    return a.intl.string(a.t.mEwyko);
                case "thb":
                    return a.intl.string(a.t["9W3Guf"]);
                case "myr":
                    return a.intl.string(a.t.MOaho3);
                case "krw":
                    return a.intl.string(a.t["20VnAz"]);
                case "mxn":
                    return a.intl.string(a.t.t2RLng);
                case "bgn":
                    return a.intl.string(a.t.EhetGH);
                case "czk":
                    return a.intl.string(a.t.dWTAXT);
                case "dkk":
                    return a.intl.string(a.t.a9hHzp);
                case "huf":
                    return a.intl.string(a.t.abWUUC);
                case "ron":
                    return a.intl.string(a.t.C7WDXG);
                case "sek":
                    return a.intl.string(a.t.Z0ozta);
                case "eur":
                    return a.intl.string(a.t["uhxR+U"]);
                case "gbp":
                    return a.intl.string(a.t.RKkD0b);
                case "cad":
                    return a.intl.string(a.t.efDdLA);
                case "rub":
                    return a.intl.string(a.t.dYiAdi);
                case "nok":
                    return a.intl.string(a.t["+SUW8y"]);
                default:
                    return "";
            }
        })(e)}`,
    }));
    return (0, n.jsx)(r.l, {
        selectionMode: "single",
        label: s,
        value: l,
        options: u,
        onSelectionChange: function (e) {
            null != e && i(e);
        },
        disabled: c,
    });
};

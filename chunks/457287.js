n.d(t, { f: () => i, A: () => s });
var r = n(627968);
n(64700);
var a = n(691885),
    l = n(375708);
function i(e) {
    let { currencies: t, className: n, children: a } = e;
    return t.length < 2 ? null : (0, r.jsx)("div", { className: n, children: a });
}
let s = function (e) {
    let { label: t, currencies: n, onChange: i, selectedCurrency: s, disabled: u = !1 } = e;
    if (n.length < 2 || null == s) return null;
    let o = n.map((e, t) => ({
        id: t.toString(),
        value: e,
        label: `${e.toUpperCase()} - ${(function (e) {
            switch (e) {
                case "brl":
                    return l.intl.string(l.t.qEyr9g);
                case "pln":
                    return l.intl.string(l.t.eAdNmS);
                case "try":
                    return l.intl.string(l.t.J05KNY);
                case "usd":
                    return l.intl.string(l.t.kJGVtL);
                case "aud":
                    return l.intl.string(l.t.ylmkM5);
                case "pen":
                    return l.intl.string(l.t["sKR+OL"]);
                case "php":
                    return l.intl.string(l.t["0p6FTm"]);
                case "ars":
                    return l.intl.string(l.t.GTI3B6);
                case "cop":
                    return l.intl.string(l.t["/FnP7L"]);
                case "clp":
                    return l.intl.string(l.t["TPV/a1"]);
                case "jpy":
                    return l.intl.string(l.t.QKSoIh);
                case "idr":
                    return l.intl.string(l.t.UBrRGq);
                case "vnd":
                    return l.intl.string(l.t.mEwyko);
                case "thb":
                    return l.intl.string(l.t["9W3Guf"]);
                case "myr":
                    return l.intl.string(l.t.MOaho3);
                case "krw":
                    return l.intl.string(l.t["20VnAz"]);
                case "mxn":
                    return l.intl.string(l.t.t2RLng);
                case "bgn":
                    return l.intl.string(l.t.EhetGH);
                case "czk":
                    return l.intl.string(l.t.dWTAXT);
                case "dkk":
                    return l.intl.string(l.t.a9hHzp);
                case "huf":
                    return l.intl.string(l.t.abWUUC);
                case "ron":
                    return l.intl.string(l.t.C7WDXG);
                case "sek":
                    return l.intl.string(l.t.Z0ozta);
                case "eur":
                    return l.intl.string(l.t["uhxR+U"]);
                case "gbp":
                    return l.intl.string(l.t.RKkD0b);
                case "cad":
                    return l.intl.string(l.t.efDdLA);
                case "rub":
                    return l.intl.string(l.t.dYiAdi);
                case "nok":
                    return l.intl.string(l.t["+SUW8y"]);
                default:
                    return "";
            }
        })(e)}`,
    }));
    return (0, r.jsx)(a.l, {
        selectionMode: "single",
        label: t,
        value: s,
        options: o,
        onSelectionChange: (e) => {
            null != e && i(e);
        },
        disabled: u,
    });
};

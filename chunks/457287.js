n.d(t, { f: () => a, A: () => l });
var s = n(477900);
n(582128);
var r = n(691885),
    i = n(375708);
function a(e) {
    let { currencies: t, className: n, children: r } = e;
    return t.length < 2 ? null : (0, s.jsx)("div", { className: n, children: r });
}
let l = function (e) {
    let { label: t, currencies: n, onChange: a, selectedCurrency: l, disabled: u = !1 } = e;
    if (n.length < 2 || null == l) return null;
    let c = n.map((e, t) => ({
        id: t.toString(),
        value: e,
        label: `${e.toUpperCase()} - ${(function (e) {
            switch (e) {
                case "brl":
                    return i.intl.string(i.t.qEyr9g);
                case "pln":
                    return i.intl.string(i.t.eAdNmS);
                case "try":
                    return i.intl.string(i.t.J05KNY);
                case "usd":
                    return i.intl.string(i.t.kJGVtL);
                case "aud":
                    return i.intl.string(i.t.ylmkM5);
                case "pen":
                    return i.intl.string(i.t["sKR+OL"]);
                case "php":
                    return i.intl.string(i.t["0p6FTm"]);
                case "ars":
                    return i.intl.string(i.t.GTI3B6);
                case "cop":
                    return i.intl.string(i.t["/FnP7L"]);
                case "clp":
                    return i.intl.string(i.t["TPV/a1"]);
                case "jpy":
                    return i.intl.string(i.t.QKSoIh);
                case "idr":
                    return i.intl.string(i.t.UBrRGq);
                case "vnd":
                    return i.intl.string(i.t.mEwyko);
                case "thb":
                    return i.intl.string(i.t["9W3Guf"]);
                case "myr":
                    return i.intl.string(i.t.MOaho3);
                case "krw":
                    return i.intl.string(i.t["20VnAz"]);
                case "mxn":
                    return i.intl.string(i.t.t2RLng);
                case "bgn":
                    return i.intl.string(i.t.EhetGH);
                case "czk":
                    return i.intl.string(i.t.dWTAXT);
                case "dkk":
                    return i.intl.string(i.t.a9hHzp);
                case "huf":
                    return i.intl.string(i.t.abWUUC);
                case "ron":
                    return i.intl.string(i.t.C7WDXG);
                case "sek":
                    return i.intl.string(i.t.Z0ozta);
                case "eur":
                    return i.intl.string(i.t["uhxR+U"]);
                case "gbp":
                    return i.intl.string(i.t.RKkD0b);
                case "cad":
                    return i.intl.string(i.t.efDdLA);
                case "rub":
                    return i.intl.string(i.t.dYiAdi);
                case "nok":
                    return i.intl.string(i.t["+SUW8y"]);
                default:
                    return "";
            }
        })(e)}`,
    }));
    return (0, s.jsx)(r.l, {
        selectionMode: "single",
        label: t,
        value: l,
        options: c,
        onSelectionChange: function (e) {
            null != e && a(e);
        },
        disabled: u,
    });
};

a.d(t, { Z: () => s });
var i = {
        about: 'körülbelül',
        over: 'több mint',
        almost: 'majdnem',
        lessthan: 'kevesebb mint'
    },
    n = {
        xseconds: ' másodperc',
        halfaminute: 'fél perc',
        xminutes: ' perc',
        xhours: ' óra',
        xdays: ' nap',
        xweeks: ' hét',
        xmonths: ' hónap',
        xyears: ' év'
    },
    r = {
        xseconds: {
            '-1': ' másodperccel ezelőtt',
            1: ' másodperc múlva',
            0: ' másodperce'
        },
        halfaminute: {
            '-1': 'fél perccel ezelőtt',
            1: 'fél perc múlva',
            0: 'fél perce'
        },
        xminutes: {
            '-1': ' perccel ezelőtt',
            1: ' perc múlva',
            0: ' perce'
        },
        xhours: {
            '-1': ' órával ezelőtt',
            1: ' óra múlva',
            0: ' órája'
        },
        xdays: {
            '-1': ' nappal ezelőtt',
            1: ' nap múlva',
            0: ' napja'
        },
        xweeks: {
            '-1': ' héttel ezelőtt',
            1: ' hét múlva',
            0: ' hete'
        },
        xmonths: {
            '-1': ' hónappal ezelőtt',
            1: ' hónap múlva',
            0: ' hónapja'
        },
        xyears: {
            '-1': ' évvel ezelőtt',
            1: ' év múlva',
            0: ' éve'
        }
    };
let s = function (e, t, a) {
    var s = e.match(/about|over|almost|lessthan/i),
        d = s ? e.replace(s[0], '') : e,
        l = (null == a ? void 0 : a.addSuffix) === !0,
        o = d.toLowerCase(),
        u = (null == a ? void 0 : a.comparison) || 0,
        m = l ? r[o][u] : n[o],
        c = 'halfaminute' === o ? m : t + m;
    return s && (c = i[s[0].toLowerCase()] + ' ' + c), c;
};

let i = "Localized";
function r(e) {
    return "object" == typeof e && null != e && "string" == typeof e.default && "object" == typeof e.localizations;
}
function a(e) {
    return (
        "object" == typeof e &&
        null != e &&
        "object" == typeof e.heroArtLocalizedVideoLinksDarkTheme &&
        "object" == typeof e.heroArtLocalizedVideoLinksLightTheme &&
        "object" == typeof e.heroArtVideoSubtitleLinks
    );
}
n.d(
    t,
    {},
    {
        v: function (e, t) {
            let n = (function e(t) {
                if (Array.isArray(t)) return t.map((t) => e(t));
                if (null == t || "object" != typeof t || ArrayBuffer.isView(t)) return t;
                let n = Object.create(Object.getPrototypeOf(t));
                for (let [i, r] of Object.entries(t)) n[i] = e(r);
                return n;
            })(e);
            return (
                (function e(t, n) {
                    if (Array.isArray(t)) {
                        for (let i of t) e(i, n);
                        return;
                    }
                    if ("object" == typeof t && null != t)
                        for (let [s, l] of (a(t.storage) &&
                            (function (e, t, n) {
                                let i = t.heroArtLocalizedVideoLinksDarkTheme[n];
                                null != i && "" !== i && (e.videoLink = i);
                                let r = t.heroArtLocalizedVideoLinksLightTheme[n];
                                null != r && "" !== r && (e.heroArtVideoLinkLightTheme = r);
                                let a = t.heroArtVideoSubtitleLinks,
                                    s = Object.keys(a);
                                if (s.length > 0) {
                                    let t = null != a[n];
                                    e.heroArtVideoSubtitles = s.map((e) => ({
                                        link: a[e],
                                        locale: e,
                                        isDefault: e === n || ("en-US" === e && !t),
                                    }));
                                }
                                e.storage = void 0;
                            })(t, t.storage, n),
                        Object.entries(t))) {
                            if (s.endsWith(i) && r(l)) {
                                let e = s.slice(0, -i.length),
                                    r = l.localizations[n] ?? ("" !== l.default ? l.default : null);
                                null != r && e in t && (t[e] = r);
                                continue;
                            }
                            e(l, n);
                        }
                })(n, t),
                n
            );
        },
        x: function e(t, n) {
            if (Array.isArray(t)) {
                for (let i of t) e(i, n);
                return;
            }
            if ("object" == typeof t && null != t)
                for (let [s, l] of Object.entries(t)) {
                    if (a(l)) {
                        for (let e of Object.keys(l.heroArtLocalizedVideoLinksDarkTheme)) n.add(e);
                        for (let e of Object.keys(l.heroArtLocalizedVideoLinksLightTheme)) n.add(e);
                        for (let e of Object.keys(l.heroArtVideoSubtitleLinks)) n.add(e);
                        continue;
                    }
                    if (s.endsWith(i) && r(l)) {
                        for (let e of Object.keys(l.localizations)) n.add(e);
                        continue;
                    }
                    e(l, n);
                }
        },
    },
);

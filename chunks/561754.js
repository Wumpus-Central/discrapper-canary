"use strict";
n.d(t, { A: () => L }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(59892),
    s = n(114088),
    o = n(743923),
    l = n(864642),
    u = n(274361),
    c = n(816694),
    d = n(418522),
    _ = n(150239),
    f = n(464602),
    p = n(623819),
    h = n(342470),
    m = n(554067),
    g = n(471767),
    E = n(989349),
    A = n.n(E),
    I = n(580424),
    T = n(379418),
    y = n(773669),
    S = n(634788),
    v = n(374803),
    C = n(985018);
let b = [
        "YYYYMMDD",
        "YYYY-MM-DD",
        "LL",
        "L",
        "MMMM Do YYYY",
        "MMMM Do YY",
        "MMMM Do, YYYY",
        "MMMM Do, YY",
        "MMMM D YYYY",
        "MMMM D YY",
        "MMMM D, YYYY",
        "MMMM D, YY",
        "MMMM Do YYYY",
        "MMMM Do YY",
        "MMMM Do, YYYY",
        "MMMM Do, YY",
        "MMM D YYYY",
        "MMM D YY",
        "MMM D, YYYY",
        "MMM D, YY",
        "MMM Do YYYY",
        "MMM Do YY",
        "MMM Do, YYYY",
        "MMM Do, YY",
        "MMMM D",
        "MMMM Do",
        "MMM D",
        "MMM Do",
        "D MMMM",
        "Do MMMM",
        "D MMM",
        "Do MMM",
        "dddd",
        "ddd",
    ],
    N = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    R = [A().ISO_8601, ...b.flatMap((e) => [...N.map((t) => `${e} ${t}`), ...N])];
function O() {
    let e = y.default.locale;
    if ("en-US" === e) return a;
    if ("en-GB" === e) return a.GB;
    if ("de" === e) return s;
    if ("fr" === e) return o;
    if ("ja" === e) return l;
    else if ("nl" === e) return u;
    else if ("ru" === e) return c;
    else if ("it" === e) return d;
    else if ("uk" === e) return _;
    else if ("zh-CN" === e) return f;
    else if ("zh-TW" === e) return p;
    else if (e.startsWith("sv-")) return h;
    else if (e.startsWith("pt-")) return m;
    else if (e.startsWith("es-")) return g;
    else return null;
}
function D(e, t, n) {
    let r, i, a;
    if (null == n) return {};
    let s = e.clone();
    s.subtract(1, n.periodType);
    let o = t.clone();
    return (
        o.add(1, n.periodType),
        t.isSame(e, n.periodType)
            ? ((a = C.intl.string(n.currentName)), t.isSameOrBefore(e) && (i = C.intl.string(n.nextName)))
            : t.isSame(s, n.periodType) && ((a = C.intl.string(n.previousName)), (i = C.intl.string(n.currentName))),
        null != i && (r = o.unix().toString()),
        { adjustedTimestamp: r, adjustedDescription: i, unadjustedDescription: a }
    );
}
let L = {
    autocompleteInputElementType: "timestampMentionInput",
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n) {
        let r = A()(),
            i = O(),
            [a] = i?.parse(n, r.toDate()) ?? [void 0],
            s = a?.start != null && a?.end == null && a.text === n,
            o = s ? A()(a.start.date()) : A()(n, R, !0),
            l = [],
            { format: u } = o.creationData();
        if (
            ("string" != typeof u && (u = void 0),
            "" !== n || o.isValid() || ((o = r), (u = "YYYYMMDDHHmmss")),
            o.isValid() && (s || null != u))
        ) {
            let e;
            if (s && !a.start.isCertain("hour")) {
                let e = 9e5,
                    t = Math.round(o.valueOf() / e) * e;
                o = A()(t);
            }
            let t = s ? a.start.isCertain("weekday") : u?.includes("d"),
                n = s
                    ? a.start.isCertain("day") || a.start.isCertain("month") || a.start.isCertain("year")
                    : u?.includes("D"),
                i = s ? a.start.isCertain("year") : u?.includes("Y"),
                c = s ? a.start.isCertain("second") : u?.includes("s"),
                d = o.unix().toString(),
                _ = c ? "S" : "s";
            n || t
                ? t && !n
                    ? (e = {
                          periodType: "week",
                          previousName: C.t["4uTwgO"],
                          currentName: C.t["6YiNaP"],
                          nextName: C.t.HE4jqH,
                      })
                    : i ||
                      (e = {
                          periodType: "year",
                          previousName: C.t.R7VMEE,
                          currentName: C.t["U8lK/J"],
                          nextName: C.t.OppVVE,
                      })
                : (l.push({ mention: { timestamp: d, format: c ? "T" : "t" }, description: C.intl.string(C.t.yHv4oJ) }),
                  l.push({}),
                  (e = {
                      periodType: "day",
                      previousName: C.t.ZdDLO0,
                      currentName: C.t.mbs4NX,
                      nextName: C.t["EqnX/z"],
                  }));
            let { adjustedTimestamp: f, adjustedDescription: p, unadjustedDescription: h } = D(r, o, e);
            null != f &&
                (l.push({ mention: { timestamp: f, format: _ }, description: p }),
                l.push({ mention: { timestamp: f, format: "f" } }),
                l.push({ mention: { timestamp: f, format: "F" } }),
                l.push({ mention: { timestamp: f, format: "R" } }),
                l.push({})),
                l.push({ mention: { timestamp: d, format: _ }, description: h }),
                l.push({ mention: { timestamp: d, format: "f" } }),
                l.push({ mention: { timestamp: d, format: "F" } }),
                l.push({ mention: { timestamp: d, format: "R" } });
        }
        return { results: { mentions: l } };
    },
    renderResults(e) {
        let {
                results: { mentions: t },
                selectedIndex: n,
                query: a,
                onHover: s,
                onClick: o,
            } = e,
            l = t.map((e, t) => {
                let { mention: i, description: a } = e;
                if (void 0 === i) return (0, r.jsx)(I.Ay.Divider, {}, `divider-${t}`);
                let l = (0, T.WA)(i);
                return null == l
                    ? null
                    : (0, r.jsx)(
                          I.Ay.Timestamp,
                          { onClick: o, onHover: s, selected: n === t, index: t, timestamp: l, description: a },
                          `timestamp-${t}`,
                      );
            }),
            u = C.t.I4nJDb,
            c = C.intl.string(C.t.pUP8UM);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, S.wZ)({ titleWithQuery: u, titleWithoutQuery: c, query: a, getQuery: (e) => `${e}` }),
                    l,
                ],
            },
            "timestamp_formats",
        );
    },
    onSelect(e) {
        let {
                results: { mentions: t },
                index: n,
                options: r,
            } = e,
            { mention: i } = t[n] ?? {};
        if (null == i) return null;
        let a = (0, T.tf)(i.timestamp, i.format),
            s = (0, T.WA)(i)?.formatted;
        return null == s ? null : (r.replaceInlineInput("timestampMentionInput", s, a), { type: v.kc.TIMESTAMP });
    },
};

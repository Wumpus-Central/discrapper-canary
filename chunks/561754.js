n.d(t, { A: () => O }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(59892),
    s = n(114088),
    o = n(743923),
    u = n(864642),
    a = n(274361),
    m = n(816694),
    c = n(418522),
    d = n(150239),
    p = n(464602),
    y = n(623819),
    A = n(342470),
    h = n(554067),
    g = n(471767),
    M = n(989349),
    I = n.n(M),
    N = n(580424),
    E = n(379418),
    S = n(773669),
    C = n(634788),
    f = n(374803),
    _ = n(985018);
let T = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    D = [
        I().ISO_8601,
        ...[
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
        ].flatMap((e) => [...T.map((t) => `${e} ${t}`), ...T]),
    ],
    O = {
        autocompleteInputElementType: "timestampMentionInput",
        matches: (e, t, n, l, r) => n.length > 1,
        queryResults(e, t, n) {
            let l = I()(),
                r = (function () {
                    let e = S.default.locale;
                    if ("en-US" === e) return i;
                    if ("en-GB" === e) return i.GB;
                    if ("de" === e) return s;
                    if ("fr" === e) return o;
                    if ("ja" === e) return u;
                    else if ("nl" === e) return a;
                    else if ("ru" === e) return m;
                    else if ("it" === e) return c;
                    else if ("uk" === e) return d;
                    else if ("zh-CN" === e) return p;
                    else if ("zh-TW" === e) return y;
                    else if (e.startsWith("sv-")) return A;
                    else if (e.startsWith("pt-")) return h;
                    else if (e.startsWith("es-")) return g;
                    else return null;
                })(),
                [M] = r?.parse(n, l.toDate()) ?? [void 0],
                N = M?.start != null && M?.end == null && M.text === n,
                E = N ? I()(M.start.date()) : I()(n, D, !0),
                C = [],
                { format: f } = E.creationData();
            if (
                ("string" != typeof f && (f = void 0),
                "" !== n || E.isValid() || ((E = l), (f = "YYYYMMDDHHmmss")),
                E.isValid() && (N || null != f))
            ) {
                let e;
                if (N && !M.start.isCertain("hour")) {
                    let e = 9e5 * Math.round(E.valueOf() / 9e5);
                    E = I()(e);
                }
                let t = N ? M.start.isCertain("weekday") : f?.includes("d"),
                    n = N
                        ? M.start.isCertain("day") || M.start.isCertain("month") || M.start.isCertain("year")
                        : f?.includes("D"),
                    r = N ? M.start.isCertain("year") : f?.includes("Y"),
                    i = N ? M.start.isCertain("second") : f?.includes("s"),
                    s = E.unix().toString(),
                    o = i ? "S" : "s";
                n || t
                    ? t && !n
                        ? (e = {
                              periodType: "week",
                              previousName: _.t["4uTwgO"],
                              currentName: _.t["6YiNaP"],
                              nextName: _.t.HE4jqH,
                          })
                        : r ||
                          (e = {
                              periodType: "year",
                              previousName: _.t.R7VMEE,
                              currentName: _.t["U8lK/J"],
                              nextName: _.t.OppVVE,
                          })
                    : (C.push({
                          mention: { timestamp: s, format: i ? "T" : "t" },
                          description: _.intl.string(_.t.yHv4oJ),
                      }),
                      C.push({}),
                      (e = {
                          periodType: "day",
                          previousName: _.t.ZdDLO0,
                          currentName: _.t.mbs4NX,
                          nextName: _.t["EqnX/z"],
                      }));
                let {
                    adjustedTimestamp: u,
                    adjustedDescription: a,
                    unadjustedDescription: m,
                } = (function (e, t, n) {
                    let l, r, i;
                    if (null == n) return {};
                    let s = e.clone();
                    s.subtract(1, n.periodType);
                    let o = t.clone();
                    return (
                        o.add(1, n.periodType),
                        t.isSame(e, n.periodType)
                            ? ((i = _.intl.string(n.currentName)),
                              t.isSameOrBefore(e) && (r = _.intl.string(n.nextName)))
                            : t.isSame(s, n.periodType) &&
                              ((i = _.intl.string(n.previousName)), (r = _.intl.string(n.currentName))),
                        null != r && (l = o.unix().toString()),
                        { adjustedTimestamp: l, adjustedDescription: r, unadjustedDescription: i }
                    );
                })(l, E, e);
                null != u &&
                    (C.push({ mention: { timestamp: u, format: o }, description: a }),
                    C.push({ mention: { timestamp: u, format: "f" } }),
                    C.push({ mention: { timestamp: u, format: "F" } }),
                    C.push({ mention: { timestamp: u, format: "R" } }),
                    C.push({})),
                    C.push({ mention: { timestamp: s, format: o }, description: m }),
                    C.push({ mention: { timestamp: s, format: "f" } }),
                    C.push({ mention: { timestamp: s, format: "F" } }),
                    C.push({ mention: { timestamp: s, format: "R" } });
            }
            return { results: { mentions: C } };
        },
        renderResults(e) {
            let {
                    results: { mentions: t },
                    selectedIndex: n,
                    query: i,
                    onHover: s,
                    onClick: o,
                } = e,
                u = t.map((e, t) => {
                    let { mention: r, description: i } = e;
                    if (void 0 === r) return (0, l.jsx)(N.Ay.Divider, {}, `divider-${t}`);
                    let u = (0, E.WA)(r);
                    return null == u
                        ? null
                        : (0, l.jsx)(
                              N.Ay.Timestamp,
                              { onClick: o, onHover: s, selected: n === t, index: t, timestamp: u, description: i },
                              `timestamp-${t}`,
                          );
                }),
                a = _.t.I4nJDb,
                m = _.intl.string(_.t.pUP8UM);
            return (0, l.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, C.wZ)({ titleWithQuery: a, titleWithoutQuery: m, query: i, getQuery: (e) => `${e}` }),
                        u,
                    ],
                },
                "timestamp_formats",
            );
        },
        onSelect(e) {
            let {
                    results: { mentions: t },
                    index: n,
                    options: l,
                } = e,
                { mention: r } = t[n] ?? {};
            if (null == r) return null;
            let i = (0, E.tf)(r.timestamp, r.format),
                s = (0, E.WA)(r)?.formatted;
            return null == s ? null : (l.replaceInlineInput("timestampMentionInput", s, i), { type: f.kc.TIMESTAMP });
        },
    };

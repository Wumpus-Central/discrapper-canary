n.d(t, { A: () => S });
var l = n(627968),
    r = n(64700),
    i = n(735438),
    s = n.n(i),
    o = n(289873),
    u = n(73153),
    a = n(696459),
    m = n(58149),
    c = n(861382),
    d = n(392054),
    p = n(580424),
    y = n(235986),
    A = n(29599),
    h = n(374803);
n(827669);
var g = n(652215),
    M = n(985018),
    I = n(331691);
let N = { results: { command: null, integrations: [], isLoading: !1 } };
function E(e, t, n) {
    let l;
    return (
        n.commands === h.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = c.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let S = {
    stores: [c.A, A.A],
    matches: (e, t, n, l, r) =>
        r.commands !== h.Ze.DISABLED &&
        (r.commands === h.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif") || n.startsWith("/tenor")
            : c.A.getActiveCommand(e.id)?.integrationType === g.p_j.GIF && c.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, r) {
        let { command: i, query: o } = E(e, n, l);
        if (null == i) return N;
        let u = s().findKey(g.Z86, (e) => e.command === i);
        r && null != u && o.length > 0 && a.A.search(u, o);
        let m = A.A.getResults(u, o);
        return null == m ? N : { results: { command: i, integrations: m.results, isLoading: m.loading } };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: i,
                channel: s,
                query: u,
                options: a,
                onHover: m,
                onClick: d,
            } = e,
            { command: A, query: N } = E(s, u, a);
        if (null == A || 0 === N.length) return null;
        if (n) return (0, l.jsx)(o.y, { className: I.u1, type: o.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === g.p_j.GIF)
                        return (
                            (e = !0),
                            (0, l.jsx)(
                                p.Ay.GIFIntegration,
                                {
                                    className: I.ho,
                                    onClick: d,
                                    onHover: m,
                                    selected: i === n,
                                    index: n,
                                    width: t.meta.width ?? 0,
                                    height: t.meta.height ?? 0,
                                    src: t.meta.src ?? "",
                                    url: t.meta.url,
                                },
                                `${t.meta.url}${t.meta.src}`,
                            )
                        );
                }),
                o = a.commands === h.Ze.OLD_BUILT_INS ? A : (c.A.getActiveCommand(s.id)?.integrationTitle ?? A),
                u =
                    N.length > 0 && null != o
                        ? M.intl.format(M.t["3njXz/"], { query: N, command: o })
                        : null != o
                          ? o
                          : A;
            return (0, l.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, l.jsx)(p.Ay.Title, { title: u }),
                        e ? (0, l.jsx)(y.A, { className: I.os, children: n }) : n,
                    ],
                },
                "gifs",
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: l,
            type: r,
            options: i,
            channel: s,
            guild: o,
        } = e;
        if (null == t) return { type: null };
        let a = n[l];
        if (
            (r === h.lg.INSERT ? i.replaceText(a.meta.url) : i.sendMessage(a.meta.url),
            m.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                search_type: g.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            i.commands !== h.Ze.OLD_BUILT_INS)
        ) {
            let e = c.A.getActiveCommand(s.id);
            e?.inputType === d.y$.BUILT_IN_INTEGRATION &&
                (u.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: o },
                    command: e,
                    commandOrigin: d.iw.CHAT,
                }),
                m.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: c.A.getSource(s.id),
                }));
        }
        return { type: h.kc.GIF };
    },
};

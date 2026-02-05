"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(397927),
    l = n(73153),
    u = n(696459),
    c = n(58149),
    d = n(861382),
    _ = n(392054),
    f = n(580424),
    p = n(235986),
    h = n(29599),
    m = n(374803);
n(827669);
var g = n(652215),
    E = n(985018),
    A = n(538830);
let I = { results: { command: null, integrations: [], isLoading: !1 } };
function T(e, t, n) {
    let r;
    return (
        n.commands === m.Ze.OLD_BUILT_INS
            ? ((r = t.split(" ")[0].substring(1)), (t = t.substring((r.length ?? 0) + 1)))
            : (r = d.A.getActiveCommand(e.id)?.untranslatedName),
        { command: r, query: t.trim() }
    );
}
function y(e) {
    return e.meta.url;
}
let S = {
    stores: [d.A, h.A],
    matches: (e, t, n, r, i) =>
        i.commands !== m.Ze.DISABLED &&
        (i.commands === m.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif") || n.startsWith("/tenor")
            : d.A.getActiveCommand(e.id)?.integrationType === g.p_j.GIF && d.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, r, i) {
        let { command: a, query: o } = T(e, n, r);
        if (null == a) return I;
        let l = s().findKey(g.Z86, (e) => e.command === a);
        i && null != l && o.length > 0 && u.A.search(l, o);
        let c = h.A.getResults(l, o);
        return null == c ? I : { results: { command: a, integrations: c.results, isLoading: c.loading } };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: a,
                channel: s,
                query: l,
                options: u,
                onHover: c,
                onClick: _,
            } = e,
            { command: h, query: I } = T(s, l, u);
        if (null == h || 0 === I.length) return null;
        if (n) return (0, r.jsx)(o.y$y, { className: A.u1, type: o.y$y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === g.p_j.GIF)
                        return (
                            (e = !0),
                            (0, r.jsx)(
                                f.Ay.GIFIntegration,
                                {
                                    className: A.ho,
                                    onClick: _,
                                    onHover: c,
                                    selected: a === n,
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
                o = u.commands === m.Ze.OLD_BUILT_INS ? h : (d.A.getActiveCommand(s.id)?.integrationTitle ?? h),
                l =
                    I.length > 0 && null != o
                        ? E.intl.format(E.t["3njXz/"], { query: I, command: o })
                        : null != o
                          ? o
                          : h;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(f.Ay.Title, { title: l }),
                        e ? (0, r.jsx)(p.A, { className: A.os, children: n }) : n,
                    ],
                },
                "gifs",
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: r,
            type: i,
            options: a,
            channel: s,
            guild: o,
        } = e;
        if (null == t) return { type: null };
        let u = n[r];
        if (
            (i === m.lg.INSERT ? a.replaceText(y(u)) : a.sendMessage(y(u)),
            c.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                search_type: g.I4_.GIF,
                index_num: r,
                source_object: `/${t}`,
            }),
            a.commands !== m.Ze.OLD_BUILT_INS)
        ) {
            let e = d.A.getActiveCommand(s.id);
            e?.inputType === _.y$.BUILT_IN_INTEGRATION &&
                (l.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: o },
                    command: e,
                    commandOrigin: _.iw.CHAT,
                }),
                c.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: d.A.getSource(s.id),
                }));
        }
        return { type: m.kc.GIF };
    },
};

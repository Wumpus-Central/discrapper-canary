n(435558);
var i = n(926675),
    l = n(761915),
    s = n(501592),
    r = n(454908),
    u = n(287809),
    d = n(646976),
    g = n(289173),
    a = n(851767),
    o = n(958805),
    _ = n(61881),
    c = n(229231);
n(600253);
var f = n(792996);
function p(e) {
    return e in i.u ? i.u[e] : 0;
}
function E() {
    let e = u.default.getCurrentUser(),
        t = null != e ? a.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function m() {
    return _.A.hasPendingChanges() ? (_.A.getPendingWidgets() ?? []) : E();
}
function h(e) {
    return (
        m()
            .filter(g.fu)
            .find((t) => t.type === e) ?? null
    );
}
function I(e) {
    let t = m(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return ((i[n] = e), i);
    }
}
function T() {
    return m().find((e) => e instanceof d.kM) ?? null;
}
function y(e, t) {
    if (t.length > 20) return;
    let n = T();
    if (null == n) return;
    let i = new d.kM({
        id: n.id,
        clips: n.clips.map((n) => (n.id === e ? { ...n, tags: t.length > 0 ? t : void 0 } : n)),
    });
    o.A.setPendingWidgets(I(i));
}
function A(e, t, n) {
    let i = Object.values(l.X).length;
    if (n.length > i) return;
    let s = h(e);
    if (null == s) return;
    let r = s.games.find((e) => e.gameId === t);
    if (null == r) return;
    let u = { ...r, tags: n },
        d = s.games.map((e) => (e.gameId === t ? u : e)),
        a = I(new g.Yy({ ...s, games: d }));
    o.A.setPendingWidgets(a);
}
n.d(
    t,
    {},
    {
        $6: y,
        $C: function (e) {
            let t = T(),
                n = t?.clips ?? [];
            if (n.length >= 4 || n.some((t) => "uploading" === t.status && t.localClipId === e.localClipId)) return !1;
            let i = new d.kM({ id: t?.id, clips: [...n, e] });
            return (o.A.setPendingWidgets(I(i)), !0);
        },
        BF: E,
        FM: function (e, t) {
            let { showEditingControls: n } = t,
                l = e.games.length > 0;
            if (n && l)
                return 1 === i.u[e.type]
                    ? f.intl.string(f.t.wiXdEa)
                    : f.intl.format(f.t["zR1+0/"], { numGames: i.u[e.type] });
        },
        Fo: function (e, t) {
            let n = T();
            if (null == n) return;
            let i = n.clips.find((t) => t.id === e);
            i?.tags != null &&
                0 !== i.tags.length &&
                y(
                    e,
                    i.tags.filter((e) => e !== t),
                );
        },
        L: function (e) {
            return c.Ok[e.type](e);
        },
        N5: function (e, t) {
            let n = T();
            if (null == n || e === t) return;
            let i = [...n.clips];
            if (e < 0 || e >= i.length || t < 0 || t >= i.length) return;
            let [l] = i.splice(e, 1);
            i.splice(t, 0, l);
            let s = new d.kM({ id: n.id, clips: i });
            o.A.setPendingWidgets(I(s));
        },
        QN: function (e, t) {
            let n = T(),
                i = n?.clips.find((t) => t.id === e);
            if (null == n || null == i || "saved" === i.status) return;
            let l = new d.kM({ id: n.id, clips: n.clips.map((e) => (e === i ? { ...i, thumbnail: t } : e)) });
            o.A.setPendingWidgets(I(l));
        },
        R_: function (e, t) {
            if (e === t) return;
            let n = m();
            if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
            let i = [...n],
                [l] = i.splice(e, 1);
            (i.splice(t, 0, l), o.A.setPendingWidgets(i));
        },
        Un: function (e, t, n) {
            let i = h(e);
            if (null == i || null == i.games || t === n) return;
            let l = [...i.games];
            if (t < 0 || t >= l.length || n < 0 || n >= l.length) return;
            let [s] = l.splice(t, 1);
            l.splice(n, 0, s);
            let r = I(new g.Yy({ ...i, games: l }));
            o.A.setPendingWidgets(r);
        },
        WX: function (e, t) {
            let n = T(),
                i = n?.clips.find((t) => t.id === e);
            if (null == n || i?.status !== "uploading") return !1;
            let l = new d.kM({
                id: n.id,
                clips: n.clips.map((e) => (e === i ? { ...i, status: "pending", uploadFilename: t } : e)),
            });
            return (o.A.setPendingWidgets(I(l)), !0);
        },
        XX: function (e) {
            return !(0, s.K)(e.contentClassification) && !i.Z.has(e.id);
        },
        Y5: function (e) {
            let t = m();
            null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && o.A.setPendingWidgets([e, ...t]);
        },
        cv: p,
        ef: function (e, t) {
            let n = h(e);
            if (null == n) return;
            let i = (null != n.games ? n.games : []).filter((e) => e.gameId !== t),
                l = I(new g.Yy({ ...n, games: i }));
            o.A.setPendingWidgets(l);
        },
        ew: function (e) {
            let t,
                { widgetType: n, game: i, ignoreMaxGames: l = !1 } = e,
                s = h(n),
                u = p(n);
            if (null != s) {
                let e = s.games?.length ?? 0;
                if ((!l && e >= u) || (s.games ?? []).some((e) => e.gameId === i.gameId)) return !1;
            }
            let d = { gameId: i.gameId, comment: i.comment, tags: i.tags };
            t = null != s ? [d, ...(s.games ?? [])] : [d];
            let a = I(new g.Yy({ ...(s ?? { type: n }), games: t }));
            return (o.A.setPendingWidgets(a), r.I.fetchMany([i.gameId]), !0);
        },
        iu: function (e) {
            return T()?.clips.some((t) => t.id === e && "uploading" === t.status) ?? !1;
        },
        mC: function (e) {
            let t = T();
            if (null == t || !t.clips.some((t) => t.id === e)) return;
            let n = new d.kM({ id: t.id, clips: t.clips.filter((t) => t.id !== e) });
            o.A.setPendingWidgets(I(n));
        },
        mI: function (e, t) {
            let n = T();
            if (null == n) return;
            let i = t.trim(),
                l = new d.kM({
                    id: n.id,
                    clips: n.clips.map((t) => (t.id === e ? { ...t, title: "" === i ? void 0 : i } : t)),
                });
            o.A.setPendingWidgets(I(l));
        },
        oc: function (e, t, n) {
            let i = h(e);
            if (null == i) return;
            let l = i.games.find((e) => e.gameId === t);
            if (null == l || n === l.comment) return;
            let s = { ...l, comment: n },
                r = i.games.map((e) => (e.gameId === t ? s : e)),
                u = I(new g.Yy({ ...i, games: r }));
            o.A.setPendingWidgets(u);
        },
        qA: function (e) {
            let t = m().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
            o.A.setPendingWidgets(t);
        },
        s1: A,
        tg: function (e, t, n) {
            let i = h(e);
            if (null == i) return;
            let l = i.games.find((e) => e.gameId === t);
            if (null == l || null == l.tags || 0 === l.tags.length) return;
            let s = l.tags.filter((e) => e !== n);
            A(i.type, t, s.length > 0 ? s : []);
        },
        uA: function (e) {
            let t = p(e.type);
            return e.games.length >= t;
        },
    },
);

var n = l(191850),
    a = l(792996);
function r(e) {
    return "published" === e ? "live" : "preview";
}
function i(e) {
    return "preview" === e ? "preview" : "live";
}
let s = { live: n.default.MLa86y, preview: n.default["6uafcy"] },
    o = { live: n.default["PeX+1n"], preview: n.default["Gtd/KL"] };
function u(e, t, l, r) {
    let i =
        "live" !== t || e.targetLive
            ? r && "preview" === t && e.callerLiveOnVibeyard
                ? a.intl.string(n.default.bSQXpN)
                : void 0
            : a.intl.formatToPlainString(n.default.GNcOoY, { target: e.target });
    return { data: t, label: a.intl.string(s[t]), description: i, disabled: null != i && t !== l };
}
let d = { gets: n.default.aiHmSc, sends: n.default.i1D8eM, both: n.default.QEIP5j };
l.d(
    t,
    {},
    {
        Bw: function (e, t) {
            if (!e.targetHasPreview) return { sentence: null, options: [] };
            let l = { target: e.target };
            if ("preview" === t) return { sentence: a.intl.formatToPlainString(n.default.Q0D9Ie, l), options: [] };
            if (!e.callerHasPreview) return { sentence: a.intl.formatToPlainString(n.default.QhPlAe, l), options: [] };
            let i = r(t),
                o = a.intl.formatToPlainString("live" === i ? n.default["9iFuxr"] : n.default.FKHnHv, l);
            return e.targetLive
                ? {
                      sentence: o,
                      options: [
                          { build: "published", label: a.intl.string(s.live) },
                          { build: "auto", label: a.intl.string(s.preview) },
                      ],
                  }
                : { sentence: o, options: [] };
        },
        Sj: function (e, t) {
            if (!e.targetHasPreview) return null;
            let l = { caller: e.caller, target: e.target },
                s = i(t),
                o = {
                    label: a.intl.formatToPlainString(e.callerHasPreview ? n.default.zxQdoh : n.default.YbEDjJ, l),
                    value: s,
                    options: ["live", "preview"].map((t) => u(e, t, s, !0)),
                    locked: !1,
                    buildFor: (l) =>
                        "preview" === l ? "preview" : "preview" !== t ? t : e.callerHasPreview ? "auto" : "published",
                },
                d = "preview" === s ? "preview" : r(t);
            return {
                preview: e.callerHasPreview
                    ? {
                          label: a.intl.formatToPlainString(n.default.dpSkBA, l),
                          value: d,
                          options: ["live", "preview"].map((t) => u(e, t, d, !1)),
                          locked: "preview" === s,
                          buildFor: (e) => ("live" === e ? "published" : "auto"),
                      }
                    : null,
                live: o,
                note: "preview" === s ? a.intl.formatToPlainString(n.default["U+jxta"], { caller: e.caller }) : null,
            };
        },
        XK: function (e, t) {
            return a.intl.formatToPlainString(null == t ? n.default.tkCyiM : d[t], {
                caller: e.caller,
                target: e.target,
            });
        },
        cL: function (e, t) {
            return {
                caller: e.names[t.project_id],
                target: e.name,
                targetLive: e.live,
                targetHasPreview: e.hasPreview,
                callerHasPreview: !1 !== t.has_preview,
                callerLiveOnVibeyard: !0 === t.live_on_vibeyard,
            };
        },
        cs: function (e, t) {
            return {
                caller: e.name,
                target: e.names[t.project_id],
                targetLive: t.live,
                targetHasPreview: t.has_preview,
                callerHasPreview: e.hasPreview,
                callerLiveOnVibeyard: !1,
            };
        },
        ft: function (e, t) {
            if (!e.targetHasPreview) return null;
            let l = (e) => a.intl.string(o[e]);
            return e.callerHasPreview
                ? a.intl.formatToPlainString(n.default.MZuPO3, { caller: e.caller, preview: l(r(t)), live: l(i(t)) })
                : a.intl.formatToPlainString(n.default.Tt5ih9, { caller: e.caller, live: l(i(t)) });
        },
        sr: function (e) {
            return a.intl.formatToPlainString(n.default.rCqv8t, { caller: e.caller, target: e.target });
        },
        xP: function (e) {
            let t = e?.trim() ?? "";
            return "" === t ? null : t.charAt(0).toLocaleUpperCase() + t.slice(1);
        },
    },
);

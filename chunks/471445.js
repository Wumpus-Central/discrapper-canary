n.d(t, {
    KS: () => _,
    Th: () => p,
    bT: () => f
});
var r = n(481060),
    i = n(281956),
    a = n(271383),
    o = n(430824),
    s = n(594174),
    l = n(447003),
    c = n(176505),
    u = n(981631),
    d = n(388032);
function f(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return d.intl.string(d.t['/7EhaW']);
    switch (e.type) {
        case u.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return d.intl.string(d.t.Lt3PAA);
            if (r) return d.intl.string(d.t.LKpYbm);
            if (e.isNSFW()) return d.intl.string(d.t.vvASTU);
            if ((0, l.Z)(e)) return d.intl.string(d.t.jQ1plp);
            return d.intl.string(d.t.t1yj0N);
        case u.d4z.GUILD_FORUM:
            let i = e.isMediaChannel();
            if (e.isNSFW()) return i ? d.intl.string(d.t['pZ/fYW']) : d.intl.string(d.t.ibmpPj);
            if ((0, l.Z)(e)) return i ? d.intl.string(d.t.gfVCfH) : d.intl.string(d.t.UbLM3N);
            return i ? d.intl.string(d.t.seKITE) : d.intl.string(d.t['0sDXdn']);
        case u.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return d.intl.string(d.t['pZ/fYW']);
            if ((0, l.Z)(e)) return d.intl.string(d.t.gfVCfH);
            return d.intl.string(d.t.seKITE);
        case u.d4z.GUILD_STAGE_VOICE:
            if (n) return d.intl.string(d.t.ZjZB3t);
            if ((0, l.Z)(e)) return d.intl.string(d.t['7pRuCQ']);
            return d.intl.string(d.t.eJFSiI);
        case u.d4z.GUILD_VOICE:
            if (n) return d.intl.string(d.t.xY8Wtr);
            if ((0, l.Z)(e)) return d.intl.string(d.t.qaY8Dg);
            return d.intl.string(d.t['0kBmo6']);
        case u.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return d.intl.string(d.t.eRc6o6);
            if ((0, l.Z)(e)) return d.intl.string(d.t.EHLQws);
            return d.intl.string(d.t.GtDRi4);
        case u.d4z.GUILD_STORE:
            return d.intl.string(d.t.Ea4NDA);
        case u.d4z.DM:
            return d.intl.string(d.t.jN2DfX);
        case u.d4z.GROUP_DM:
            return d.intl.string(d.t['e5y+go']);
        case u.d4z.GUILD_DIRECTORY:
            return d.intl.string(d.t.IzZTIS);
        case u.d4z.PUBLIC_THREAD:
            return d.intl.string(d.t['7Xm5QE']);
        case u.d4z.PRIVATE_THREAD:
            return d.intl.string(d.t.F1zyvb);
        default:
            return null;
    }
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: d = !1, video: f = !1, stream: _ = !1, hasActiveThreads: p = !1, textFocused: h = !1 } = n;
    if (null == e) return null;
    null == t && (t = o.Z.getGuild(e.getGuildId()));
    let m = (0, i.n)(null == t ? void 0 : t.id, [o.Z, s.default, a.ZP]);
    if (e.isModeratorReportChannel()) return r.U65;
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.snC;
    switch (e.type) {
        case u.d4z.GUILD_ANNOUNCEMENT:
            if (p)
                if (e.isNSFW()) return r.ToS;
                else if ((0, l.Z)(e)) return r.Fv2;
                else return r.MqZ;
            if (e.isNSFW()) return r.ToS;
            if ((0, l.Z)(e)) return r.Fv2;
            return r.MqZ;
        case u.d4z.GUILD_STORE:
            return r.lO_;
        case u.d4z.DM:
        case u.d4z.GROUP_DM:
            return r.lOy;
        case u.d4z.PRIVATE_THREAD:
            return r.qtY;
        case u.d4z.ANNOUNCEMENT_THREAD:
        case u.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return r.Xn;
            if (e.isForumPost()) return r.kBi;
            return r.or_;
        case u.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return r.rbH;
            if (e.isNSFW()) return r.z0B;
            if ((0, l.Z)(e)) return r.W4G;
            return r.VL1;
        case u.d4z.GUILD_FORUM:
            let g = e.isMediaChannel();
            if (e.isNSFW()) return g ? r.fFY : r.Mec;
            if ((0, l.Z)(e)) return g ? r.D7T : r.BUe;
            return g ? r.XBm : r.Mmi;
        case u.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return r.fFY;
            if ((0, l.Z)(e)) return r.D7T;
            return r.XBm;
        case u.d4z.GUILD_STAGE_VOICE:
            if (m) return (0, l.Z)(e) ? r.mBM : r.pki;
            if (d) return r.mBM;
            if ((0, l.Z)(e)) return r.pki;
            else return r.ewx;
        case u.d4z.GUILD_VOICE:
            if (h) return r.kBi;
            if (e.isNSFW()) return r.BVY;
            if (_) return r.hGI;
            if (m)
                if ((0, l.Z)(e)) return r.mBM;
                else return f ? r.TLW : r.gjC;
            if (d) return r.mBM;
            if ((0, l.Z)(e)) return f ? r.TLW : r.gjC;
            else return f ? r.Odl : r.gj8;
        case u.d4z.GUILD_DIRECTORY:
            return r.aVH;
        case u.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            if (c.EC.has(e.id)) {
                if (e.id === c.HY.GUILD_HOME || e.id === c.HY.SERVER_GUIDE) return r.Vy8;
                else if (e.id === c.HY.CHANNEL_BROWSER || e.id === c.HY.CUSTOMIZE_COMMUNITY) return r.H$4;
            }
            return null;
    }
}
function p(e) {
    switch (e) {
        case u.d4z.GUILD_ANNOUNCEMENT:
            return r.MqZ;
        case u.d4z.GUILD_STORE:
            return r.lO_;
        case u.d4z.DM:
        case u.d4z.GROUP_DM:
            return r.lOy;
        case u.d4z.PRIVATE_THREAD:
            return r.qtY;
        case u.d4z.ANNOUNCEMENT_THREAD:
        case u.d4z.PUBLIC_THREAD:
            return r.or_;
        case u.d4z.GUILD_TEXT:
        case u.d4z.GUILD_FORUM:
        case u.d4z.GUILD_MEDIA:
            return r.VL1;
        case u.d4z.GUILD_STAGE_VOICE:
            return r.ewx;
        case u.d4z.GUILD_VOICE:
            return r.gj8;
        case u.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            return null;
    }
}

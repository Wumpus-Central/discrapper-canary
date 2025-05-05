n.d(t, {
    KS: () => h,
    Th: () => m,
    bT: () => p
});
var r = n(481060),
    i = n(281956),
    o = n(982168),
    a = n(271383),
    s = n(430824),
    l = n(607744),
    c = n(594174),
    u = n(447003),
    d = n(176505),
    f = n(981631),
    _ = n(388032);
function p(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return _.intl.string(_.t['/7EhaW']);
    switch (e.type) {
        case f.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return _.intl.string(_.t.Lt3PAA);
            if (r) return _.intl.string(_.t.LKpYbm);
            if (e.isNSFW()) return _.intl.string(_.t.vvASTU);
            if ((0, u.Z)(e)) return _.intl.string(_.t.jQ1plp);
            return _.intl.string(_.t.t1yj0N);
        case f.d4z.GUILD_FORUM:
            let i = e.isMediaChannel();
            if (e.isNSFW()) return i ? _.intl.string(_.t['pZ/fYW']) : _.intl.string(_.t.ibmpPj);
            if ((0, u.Z)(e)) return i ? _.intl.string(_.t.gfVCfH) : _.intl.string(_.t.UbLM3N);
            return i ? _.intl.string(_.t.seKITE) : _.intl.string(_.t['0sDXdn']);
        case f.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return _.intl.string(_.t['pZ/fYW']);
            if ((0, u.Z)(e)) return _.intl.string(_.t.gfVCfH);
            return _.intl.string(_.t.seKITE);
        case f.d4z.GUILD_STAGE_VOICE:
            if (n) return _.intl.string(_.t.ZjZB3t);
            if ((0, u.Z)(e)) return _.intl.string(_.t['7pRuCQ']);
            return _.intl.string(_.t.eJFSiI);
        case f.d4z.GUILD_VOICE:
            if (n) return _.intl.string(_.t.xY8Wtr);
            if ((0, u.Z)(e)) return _.intl.string(_.t.qaY8Dg);
            return _.intl.string(_.t['0kBmo6']);
        case f.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return _.intl.string(_.t.eRc6o6);
            if ((0, u.Z)(e)) return _.intl.string(_.t.EHLQws);
            return _.intl.string(_.t.GtDRi4);
        case f.d4z.GUILD_STORE:
            return _.intl.string(_.t.Ea4NDA);
        case f.d4z.DM:
            return _.intl.string(_.t.jN2DfX);
        case f.d4z.GROUP_DM:
            return _.intl.string(_.t['e5y+go']);
        case f.d4z.GUILD_DIRECTORY:
            return _.intl.string(_.t.IzZTIS);
        case f.d4z.PUBLIC_THREAD:
            return _.intl.string(_.t['7Xm5QE']);
        case f.d4z.PRIVATE_THREAD:
            return _.intl.string(_.t.F1zyvb);
        default:
            return null;
    }
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: _ = !1, video: p = !1, stream: h = !1, hasActiveThreads: m = !1, textFocused: g = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.Z.getGuild(e.getGuildId()));
    let E = (0, i.n)(null == t ? void 0 : t.id, [s.Z, l.Z, c.default, a.ZP]);
    if ((0, o.gT)(e)) return r.U65;
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.snC;
    switch (e.type) {
        case f.d4z.GUILD_ANNOUNCEMENT:
            if (m)
                if (e.isNSFW()) return r.ToS;
                else if ((0, u.Z)(e)) return r.Fv2;
                else return r.MqZ;
            if (e.isNSFW()) return r.ToS;
            if ((0, u.Z)(e)) return r.Fv2;
            return r.MqZ;
        case f.d4z.GUILD_STORE:
            return r.lO_;
        case f.d4z.DM:
        case f.d4z.GROUP_DM:
            return r.lOy;
        case f.d4z.PRIVATE_THREAD:
            return r.qtY;
        case f.d4z.ANNOUNCEMENT_THREAD:
        case f.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return r.Xn;
            if (e.isForumPost()) return r.kBi;
            return r.or_;
        case f.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return r.rbH;
            if (e.isNSFW()) return r.z0B;
            if ((0, u.Z)(e)) return r.W4G;
            return r.VL1;
        case f.d4z.GUILD_FORUM:
            let b = e.isMediaChannel();
            if (e.isNSFW()) return b ? r.fFY : r.Mec;
            if ((0, u.Z)(e)) return b ? r.D7T : r.BUe;
            return b ? r.XBm : r.Mmi;
        case f.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return r.fFY;
            if ((0, u.Z)(e)) return r.D7T;
            return r.XBm;
        case f.d4z.GUILD_STAGE_VOICE:
            if (E) return (0, u.Z)(e) ? r.mBM : r.pki;
            if (_) return r.mBM;
            if ((0, u.Z)(e)) return r.pki;
            else return r.ewx;
        case f.d4z.GUILD_VOICE:
            if (g) return r.kBi;
            if (e.isNSFW()) return r.BVY;
            if (h) return r.hGI;
            if (E)
                if ((0, u.Z)(e)) return r.mBM;
                else return p ? r.TLW : r.gjC;
            if (_) return r.mBM;
            if ((0, u.Z)(e)) return p ? r.TLW : r.gjC;
            else return p ? r.Odl : r.gj8;
        case f.d4z.GUILD_DIRECTORY:
            return r.aVH;
        case f.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            if (d.EC.has(e.id)) {
                if (e.id === d.HY.GUILD_HOME || e.id === d.HY.SERVER_GUIDE) return r.Vy8;
                else if (e.id === d.HY.CHANNEL_BROWSER || e.id === d.HY.CUSTOMIZE_COMMUNITY) return r.H$4;
            }
            return null;
    }
}
function m(e) {
    switch (e) {
        case f.d4z.GUILD_ANNOUNCEMENT:
            return r.MqZ;
        case f.d4z.GUILD_STORE:
            return r.lO_;
        case f.d4z.DM:
        case f.d4z.GROUP_DM:
            return r.lOy;
        case f.d4z.PRIVATE_THREAD:
            return r.qtY;
        case f.d4z.ANNOUNCEMENT_THREAD:
        case f.d4z.PUBLIC_THREAD:
            return r.or_;
        case f.d4z.GUILD_TEXT:
        case f.d4z.GUILD_FORUM:
        case f.d4z.GUILD_MEDIA:
            return r.VL1;
        case f.d4z.GUILD_STAGE_VOICE:
            return r.ewx;
        case f.d4z.GUILD_VOICE:
            return r.gj8;
        case f.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            return null;
    }
}

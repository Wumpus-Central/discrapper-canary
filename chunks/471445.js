n.d(t, {
    KS: () => p,
    Th: () => h,
    bT: () => _
});
var i = n(481060),
    r = n(281956),
    a = n(271383),
    s = n(430824),
    o = n(607744),
    l = n(594174),
    u = n(447003),
    c = n(176505),
    d = n(981631),
    f = n(388032);
function _(e, t, n, i) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return f.intl.string(f.t['/7EhaW']);
    switch (e.type) {
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return f.intl.string(f.t.Lt3PAA);
            if (i) return f.intl.string(f.t.LKpYbm);
            if (e.isNSFW()) return f.intl.string(f.t.vvASTU);
            if ((0, u.Z)(e)) return f.intl.string(f.t.jQ1plp);
            return f.intl.string(f.t.t1yj0N);
        case d.d4z.GUILD_FORUM:
            let r = e.isMediaChannel();
            if (e.isNSFW()) return r ? f.intl.string(f.t['pZ/fYW']) : f.intl.string(f.t.ibmpPj);
            if ((0, u.Z)(e)) return r ? f.intl.string(f.t.gfVCfH) : f.intl.string(f.t.UbLM3N);
            return r ? f.intl.string(f.t.seKITE) : f.intl.string(f.t['0sDXdn']);
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return f.intl.string(f.t['pZ/fYW']);
            if ((0, u.Z)(e)) return f.intl.string(f.t.gfVCfH);
            return f.intl.string(f.t.seKITE);
        case d.d4z.GUILD_STAGE_VOICE:
            if (n) return f.intl.string(f.t.ZjZB3t);
            if ((0, u.Z)(e)) return f.intl.string(f.t['7pRuCQ']);
            return f.intl.string(f.t.eJFSiI);
        case d.d4z.GUILD_VOICE:
            if (n) return f.intl.string(f.t.xY8Wtr);
            if ((0, u.Z)(e)) return f.intl.string(f.t.qaY8Dg);
            return f.intl.string(f.t['0kBmo6']);
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return f.intl.string(f.t.eRc6o6);
            if ((0, u.Z)(e)) return f.intl.string(f.t.EHLQws);
            return f.intl.string(f.t.GtDRi4);
        case d.d4z.GUILD_STORE:
            return f.intl.string(f.t.Ea4NDA);
        case d.d4z.DM:
            return f.intl.string(f.t.jN2DfX);
        case d.d4z.GROUP_DM:
            return f.intl.string(f.t['e5y+go']);
        case d.d4z.GUILD_DIRECTORY:
            return f.intl.string(f.t.IzZTIS);
        case d.d4z.PUBLIC_THREAD:
            return f.intl.string(f.t['7Xm5QE']);
        case d.d4z.PRIVATE_THREAD:
            return f.intl.string(f.t.F1zyvb);
        default:
            return null;
    }
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: f = !1, video: _ = !1, stream: p = !1, hasActiveThreads: h = !1, textFocused: m = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.Z.getGuild(e.getGuildId()));
    let g = (0, r.n)(null == t ? void 0 : t.id, [s.Z, o.Z, l.default, a.ZP]);
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return i.snC;
    switch (e.type) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (h) {
                if (e.isNSFW()) return i.ToS;
                if ((0, u.Z)(e)) return i.Fv2;
                return i.MqZ;
            }
            if (e.isNSFW()) return i.ToS;
            if ((0, u.Z)(e)) return i.Fv2;
            return i.MqZ;
        case d.d4z.GUILD_STORE:
            return i.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return i.lOy;
        case d.d4z.PRIVATE_THREAD:
            return i.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return i.Xn;
            if (e.isForumPost()) return i.kBi;
            return i.or_;
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return i.rbH;
            if (e.isNSFW()) return i.z0B;
            if ((0, u.Z)(e)) return i.W4G;
            return i.VL1;
        case d.d4z.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (e.isNSFW()) return E ? i.fFY : i.Mec;
            if ((0, u.Z)(e)) return E ? i.D7T : i.BUe;
            return E ? i.XBm : i.Mmi;
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return i.fFY;
            if ((0, u.Z)(e)) return i.D7T;
            return i.XBm;
        case d.d4z.GUILD_STAGE_VOICE:
            if (g) return (0, u.Z)(e) ? i.mBM : i.pki;
            if (f) return i.mBM;
            if ((0, u.Z)(e)) return i.pki;
            return i.ewx;
        case d.d4z.GUILD_VOICE:
            if (m) return i.kBi;
            if (e.isNSFW()) return i.BVY;
            if (p) return i.hGI;
            if (g) {
                if ((0, u.Z)(e)) return i.mBM;
                return _ ? i.TLW : i.gjC;
            }
            if (f) return i.mBM;
            if ((0, u.Z)(e)) return _ ? i.TLW : i.gjC;
            return _ ? i.Odl : i.gj8;
        case d.d4z.GUILD_DIRECTORY:
            return i.aVH;
        case d.d4z.GUILD_CATEGORY:
            return i.ROc;
        default:
            if (c.EC.has(e.id)) {
                if (e.id === c.HY.GUILD_HOME || e.id === c.HY.SERVER_GUIDE) return i.Vy8;
                if (e.id === c.HY.CHANNEL_BROWSER || e.id === c.HY.CUSTOMIZE_COMMUNITY) return i.H$4;
            }
            return null;
    }
}
function h(e) {
    switch (e) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            return i.MqZ;
        case d.d4z.GUILD_STORE:
            return i.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return i.lOy;
        case d.d4z.PRIVATE_THREAD:
            return i.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            return i.or_;
        case d.d4z.GUILD_TEXT:
        case d.d4z.GUILD_FORUM:
        case d.d4z.GUILD_MEDIA:
            return i.VL1;
        case d.d4z.GUILD_STAGE_VOICE:
            return i.ewx;
        case d.d4z.GUILD_VOICE:
            return i.gj8;
        case d.d4z.GUILD_CATEGORY:
            return i.ROc;
        default:
            return null;
    }
}

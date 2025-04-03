n.d(t, {
    KS: () => p,
    Th: () => h,
    bT: () => _
});
var r = n(481060),
    i = n(281956),
    o = n(271383),
    a = n(430824),
    s = n(607744),
    l = n(594174),
    c = n(447003),
    u = n(176505),
    d = n(981631),
    f = n(388032);
function _(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return f.NW.string(f.t['/7EhaW']);
    switch (e.type) {
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return f.NW.string(f.t.Lt3PAA);
            if (r) return f.NW.string(f.t.LKpYbm);
            if (e.isNSFW()) return f.NW.string(f.t.vvASTU);
            if ((0, c.Z)(e)) return f.NW.string(f.t.jQ1plp);
            return f.NW.string(f.t.t1yj0N);
        case d.d4z.GUILD_FORUM:
            let i = e.isMediaChannel();
            if (e.isNSFW()) return i ? f.NW.string(f.t['pZ/fYW']) : f.NW.string(f.t.ibmpPj);
            if ((0, c.Z)(e)) return i ? f.NW.string(f.t.gfVCfH) : f.NW.string(f.t.UbLM3N);
            return i ? f.NW.string(f.t.seKITE) : f.NW.string(f.t['0sDXdn']);
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return f.NW.string(f.t['pZ/fYW']);
            if ((0, c.Z)(e)) return f.NW.string(f.t.gfVCfH);
            return f.NW.string(f.t.seKITE);
        case d.d4z.GUILD_STAGE_VOICE:
            if (n) return f.NW.string(f.t.ZjZB3t);
            if ((0, c.Z)(e)) return f.NW.string(f.t['7pRuCQ']);
            return f.NW.string(f.t.eJFSiI);
        case d.d4z.GUILD_VOICE:
            if (n) return f.NW.string(f.t.xY8Wtr);
            if ((0, c.Z)(e)) return f.NW.string(f.t.qaY8Dg);
            return f.NW.string(f.t['0kBmo6']);
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return f.NW.string(f.t.eRc6o6);
            if ((0, c.Z)(e)) return f.NW.string(f.t.EHLQws);
            return f.NW.string(f.t.GtDRi4);
        case d.d4z.GUILD_STORE:
            return f.NW.string(f.t.Ea4NDA);
        case d.d4z.DM:
            return f.NW.string(f.t.jN2DfX);
        case d.d4z.GROUP_DM:
            return f.NW.string(f.t['e5y+go']);
        case d.d4z.GUILD_DIRECTORY:
            return f.NW.string(f.t.IzZTIS);
        case d.d4z.PUBLIC_THREAD:
            return f.NW.string(f.t['7Xm5QE']);
        case d.d4z.PRIVATE_THREAD:
            return f.NW.string(f.t.F1zyvb);
        default:
            return null;
    }
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: f = !1, video: _ = !1, stream: p = !1, hasActiveThreads: h = !1, textFocused: m = !1 } = n;
    if (null == e) return null;
    null == t && (t = a.Z.getGuild(e.getGuildId()));
    let g = (0, i.n)(null == t ? void 0 : t.id, [a.Z, s.Z, l.default, o.ZP]);
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.snC;
    switch (e.type) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (h)
                if (e.isNSFW()) return r.ToS;
                else if ((0, c.Z)(e)) return r.Fv2;
                else return r.MqZ;
            if (e.isNSFW()) return r.ToS;
            if ((0, c.Z)(e)) return r.Fv2;
            return r.MqZ;
        case d.d4z.GUILD_STORE:
            return r.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.lOy;
        case d.d4z.PRIVATE_THREAD:
            return r.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return r.Xn;
            if (e.isForumPost()) return r.kBi;
            return r.or_;
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return r.rbH;
            if (e.isNSFW()) return r.z0B;
            if ((0, c.Z)(e)) return r.W4G;
            return r.VL1;
        case d.d4z.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (e.isNSFW()) return E ? r.fFY : r.Mec;
            if ((0, c.Z)(e)) return E ? r.D7T : r.BUe;
            return E ? r.XBm : r.Mmi;
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return r.fFY;
            if ((0, c.Z)(e)) return r.D7T;
            return r.XBm;
        case d.d4z.GUILD_STAGE_VOICE:
            if (g) return (0, c.Z)(e) ? r.mBM : r.pki;
            if (f) return r.mBM;
            if ((0, c.Z)(e)) return r.pki;
            else return r.ewx;
        case d.d4z.GUILD_VOICE:
            if (m) return r.kBi;
            if (e.isNSFW()) return r.BVY;
            if (p) return r.hGI;
            if (g)
                if ((0, c.Z)(e)) return r.mBM;
                else return _ ? r.TLW : r.gjC;
            if (f) return r.mBM;
            if ((0, c.Z)(e)) return _ ? r.TLW : r.gjC;
            else return _ ? r.Odl : r.gj8;
        case d.d4z.GUILD_DIRECTORY:
            return r.aVH;
        case d.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            if (u.EC.has(e.id)) {
                if (e.id === u.HY.GUILD_HOME || e.id === u.HY.SERVER_GUIDE) return r.Vy8;
                else if (e.id === u.HY.CHANNEL_BROWSER || e.id === u.HY.CUSTOMIZE_COMMUNITY) return r.H$4;
            }
            return null;
    }
}
function h(e) {
    switch (e) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            return r.MqZ;
        case d.d4z.GUILD_STORE:
            return r.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.lOy;
        case d.d4z.PRIVATE_THREAD:
            return r.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            return r.or_;
        case d.d4z.GUILD_TEXT:
        case d.d4z.GUILD_FORUM:
        case d.d4z.GUILD_MEDIA:
            return r.VL1;
        case d.d4z.GUILD_STAGE_VOICE:
            return r.ewx;
        case d.d4z.GUILD_VOICE:
            return r.gj8;
        case d.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            return null;
    }
}

n.d(t, {
    KS: () => p,
    Th: () => _,
    bT: () => f,
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
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return d.intl.string(d.t["/7EhaT"]);
    let i = e.isNSFW();
    switch (e.type) {
        case u.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return d.intl.string(d.t.Lt3PAK);
            if (r) return d.intl.string(d.t.LKpYbi);
            if (i) return d.intl.string(d.t.vvASTb);
            if ((0, l.Z)(e)) return d.intl.string(d.t.jQ1plj);
            return d.intl.string(d.t.t1yj0N);
        case u.d4z.GUILD_FORUM:
            let a = e.isMediaChannel();
            if (i) return a ? d.intl.string(d.t["pZ/fYa"]) : d.intl.string(d.t.ibmpPi);
            if ((0, l.Z)(e)) return a ? d.intl.string(d.t.gfVCfL) : d.intl.string(d.t.UbLM3J);
            return a ? d.intl.string(d.t.seKITE) : d.intl.string(d.t["0sDXdm"]);
        case u.d4z.GUILD_MEDIA:
            if (i) return d.intl.string(d.t["pZ/fYa"]);
            if ((0, l.Z)(e)) return d.intl.string(d.t.gfVCfL);
            return d.intl.string(d.t.seKITE);
        case u.d4z.GUILD_STAGE_VOICE:
            if (n) return d.intl.string(d.t.ZjZB3r);
            if ((0, l.Z)(e)) return d.intl.string(d.t["7pRuCQ"]);
            return d.intl.string(d.t.eJFSiN);
        case u.d4z.GUILD_VOICE:
            if (n) return d.intl.string(d.t.xY8Wth);
            if ((0, l.Z)(e)) return d.intl.string(d.t.qaY8Dm);
            return d.intl.string(d.t["0kBmow"]);
        case u.d4z.GUILD_ANNOUNCEMENT:
            if (i) return d.intl.string(d.t.eRc6o9);
            if ((0, l.Z)(e)) return d.intl.string(d.t.EHLQwl);
            return d.intl.string(d.t.GtDRi2);
        case u.d4z.GUILD_STORE:
            return d.intl.string(d.t.Ea4NDL);
        case u.d4z.DM:
            return d.intl.string(d.t.jN2DfZ);
        case u.d4z.GROUP_DM:
            return d.intl.string(d.t["e5y+gm"]);
        case u.d4z.GUILD_DIRECTORY:
            return d.intl.string(d.t.IzZTIe);
        case u.d4z.PUBLIC_THREAD:
            return d.intl.string(d.t["7Xm5QI"]);
        case u.d4z.PRIVATE_THREAD:
            return d.intl.string(d.t.F1zyvU);
        default:
            return null;
    }
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: d = !1, video: f = !1, stream: p = !1, hasActiveThreads: _ = !1, textFocused: m = !1 } = n;
    if (null == e) return null;
    null == t && (t = o.Z.getGuild(e.getGuildId()));
    let h = (0, i.n)(null == t ? void 0 : t.id, [o.Z, s.default, a.ZP]);
    if (e.isModeratorReportChannel()) return r.U65;
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.snC;
    let g = e.isNSFW();
    switch (e.type) {
        case u.d4z.GUILD_ANNOUNCEMENT:
            if (_)
                if (g) return r.ToS;
                else if ((0, l.Z)(e)) return r.Fv2;
                else return r.MqZ;
            if (g) return r.ToS;
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
            if (g) return r.Xn;
            if (e.isForumPost()) return r.kBi;
            return r.or_;
        case u.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return r.rbH;
            if (g) return r.z0B;
            if ((0, l.Z)(e)) return r.W4G;
            return r.VL1;
        case u.d4z.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (g) return E ? r.fFY : r.Mec;
            if ((0, l.Z)(e)) return E ? r.D7T : r.BUe;
            return E ? r.XBm : r.Mmi;
        case u.d4z.GUILD_MEDIA:
            if (g) return r.fFY;
            if ((0, l.Z)(e)) return r.D7T;
            return r.XBm;
        case u.d4z.GUILD_STAGE_VOICE:
            if (h) return (0, l.Z)(e) ? r.mBM : r.pki;
            if (d) return r.mBM;
            if ((0, l.Z)(e)) return r.pki;
            else return r.ewx;
        case u.d4z.GUILD_VOICE:
            if (m) return r.kBi;
            if (g) return r.BVY;
            if (p) return r.hGI;
            if (h)
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
function _(e) {
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

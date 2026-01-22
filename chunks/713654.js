n.d(t, {
    Bq: () => f,
    _U: () => _,
    gU: () => p,
});
var r = n(397927),
    i = n(51758),
    a = n(696451),
    s = n(71393),
    o = n(287809),
    l = n(148719),
    c = n(746080),
    u = n(652215),
    d = n(985018);

function f(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return d.intl.string(d.t["/7EhaT"]);
    let i = e.isNSFW();
    switch (e.type) {
        case u.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return d.intl.string(d.t.Lt3PAK);
            if (r) return d.intl.string(d.t.LKpYbi);
            if (i) return d.intl.string(d.t.vvASTb);
            if ((0, l.A)(e)) return d.intl.string(d.t.jQ1plj);
            return d.intl.string(d.t.t1yj0N);
        case u.rbe.GUILD_FORUM:
            let a = e.isMediaChannel();
            if (i) return a ? d.intl.string(d.t["pZ/fYa"]) : d.intl.string(d.t.ibmpPi);
            if ((0, l.A)(e)) return a ? d.intl.string(d.t.gfVCfL) : d.intl.string(d.t.UbLM3J);
            return a ? d.intl.string(d.t.seKITE) : d.intl.string(d.t["0sDXdm"]);
        case u.rbe.GUILD_MEDIA:
            if (i) return d.intl.string(d.t["pZ/fYa"]);
            if ((0, l.A)(e)) return d.intl.string(d.t.gfVCfL);
            return d.intl.string(d.t.seKITE);
        case u.rbe.GUILD_STAGE_VOICE:
            if (n) return d.intl.string(d.t.ZjZB3r);
            if ((0, l.A)(e)) return d.intl.string(d.t["7pRuCQ"]);
            return d.intl.string(d.t.eJFSiN);
        case u.rbe.GUILD_VOICE:
            if (n) return d.intl.string(d.t.xY8Wth);
            if ((0, l.A)(e)) return d.intl.string(d.t.qaY8Dm);
            return d.intl.string(d.t["0kBmow"]);
        case u.rbe.GUILD_ANNOUNCEMENT:
            if (i) return d.intl.string(d.t.eRc6o9);
            if ((0, l.A)(e)) return d.intl.string(d.t.EHLQwl);
            return d.intl.string(d.t.GtDRi2);
        case u.rbe.GUILD_STORE:
            return d.intl.string(d.t.Ea4NDL);
        case u.rbe.DM:
            return d.intl.string(d.t.jN2DfZ);
        case u.rbe.GROUP_DM:
            return d.intl.string(d.t["e5y+gm"]);
        case u.rbe.GUILD_DIRECTORY:
            return d.intl.string(d.t.IzZTIe);
        case u.rbe.PUBLIC_THREAD:
            return d.intl.string(d.t["7Xm5QI"]);
        case u.rbe.PRIVATE_THREAD:
            return d.intl.string(d.t.F1zyvU);
        default:
            return null;
    }
}

function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: d = !1, video: f = !1, stream: p = !1, hasActiveThreads: _ = !1, textFocused: h = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.A.getGuild(e.getGuildId()));
    let m = (0, i.V)(null == t ? void 0 : t.id, [s.A, o.default, a.Ay]);
    if (e.isModeratorReportChannel()) return r.iFK;
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.B8Q;
    let g = e.isNSFW();
    switch (e.type) {
        case u.rbe.GUILD_ANNOUNCEMENT:
            if (_)
                if (g) return r.Md2;
                else if ((0, l.A)(e)) return r.XDC;
                else return r.koX;
            if (g) return r.Md2;
            if ((0, l.A)(e)) return r.XDC;
            return r.koX;
        case u.rbe.GUILD_STORE:
            return r.gqV;
        case u.rbe.DM:
        case u.rbe.GROUP_DM:
            return r.XxR;
        case u.rbe.PRIVATE_THREAD:
            return r.tn0;
        case u.rbe.ANNOUNCEMENT_THREAD:
        case u.rbe.PUBLIC_THREAD:
            if (g) return r.mF0;
            if (e.isForumPost()) return r.oyn;
            return r.ysw;
        case u.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return r.xxB;
            if (g) return r.rYc;
            if ((0, l.A)(e)) return r.I$d;
            return r.N$i;
        case u.rbe.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (g) return E ? r.DAq : r.fil;
            if ((0, l.A)(e)) return E ? r.cfi : r.QVg;
            return E ? r.xfq : r.bSJ;
        case u.rbe.GUILD_MEDIA:
            if (g) return r.DAq;
            if ((0, l.A)(e)) return r.cfi;
            return r.xfq;
        case u.rbe.GUILD_STAGE_VOICE:
            if (m) return (0, l.A)(e) ? r.XAi : r.DC;
            if (d) return r.XAi;
            if ((0, l.A)(e)) return r.DC;
            else return r.qux;
        case u.rbe.GUILD_VOICE:
            if (h) return r.oyn;
            if (g) return r.Ob$;
            if (p) return r.Fzq;
            if (m)
                if ((0, l.A)(e)) return r.XAi;
                else return f ? r.kIp : r.trU;
            if (d) return r.XAi;
            if ((0, l.A)(e)) return f ? r.kIp : r.trU;
            else return f ? r.npA : r.HKD;
        case u.rbe.GUILD_DIRECTORY:
            return r.Pfh;
        case u.rbe.GUILD_CATEGORY:
            return r.sjq;
        default:
            if (c.aQ.has(e.id)) {
                if (e.id === c.T4.GUILD_HOME || e.id === c.T4.SERVER_GUIDE) return r.Zf8;
                else if (e.id === c.T4.CHANNEL_BROWSER || e.id === c.T4.CUSTOMIZE_COMMUNITY) return r.kiI;
            }
            return null;
    }
}

function _(e) {
    switch (e) {
        case u.rbe.GUILD_ANNOUNCEMENT:
            return r.koX;
        case u.rbe.GUILD_STORE:
            return r.gqV;
        case u.rbe.DM:
        case u.rbe.GROUP_DM:
            return r.XxR;
        case u.rbe.PRIVATE_THREAD:
            return r.tn0;
        case u.rbe.ANNOUNCEMENT_THREAD:
        case u.rbe.PUBLIC_THREAD:
            return r.ysw;
        case u.rbe.GUILD_TEXT:
        case u.rbe.GUILD_FORUM:
        case u.rbe.GUILD_MEDIA:
            return r.N$i;
        case u.rbe.GUILD_STAGE_VOICE:
            return r.qux;
        case u.rbe.GUILD_VOICE:
            return r.HKD;
        case u.rbe.GUILD_CATEGORY:
            return r.sjq;
        default:
            return null;
    }
}

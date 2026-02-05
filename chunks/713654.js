"use strict";
n.d(t, { Bq: () => _, _U: () => p, gU: () => f });
var r = n(397927),
    i = n(51758),
    a = n(696451),
    s = n(71393),
    o = n(287809),
    l = n(148719),
    u = n(746080),
    c = n(652215),
    d = n(985018);
function _(e, t, n, r) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return d.intl.string(d.t["/7EhaT"]);
    let i = e.isNSFW();
    switch (e.type) {
        case c.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return d.intl.string(d.t.Lt3PAK);
            if (r) return d.intl.string(d.t.LKpYbi);
            if (i) return d.intl.string(d.t.vvASTb);
            if ((0, l.A)(e)) return d.intl.string(d.t.jQ1plj);
            return d.intl.string(d.t.t1yj0N);
        case c.rbe.GUILD_FORUM:
            let a = e.isMediaChannel();
            if (i) return a ? d.intl.string(d.t["pZ/fYa"]) : d.intl.string(d.t.ibmpPi);
            if ((0, l.A)(e)) return a ? d.intl.string(d.t.gfVCfL) : d.intl.string(d.t.UbLM3J);
            return a ? d.intl.string(d.t.seKITE) : d.intl.string(d.t["0sDXdm"]);
        case c.rbe.GUILD_MEDIA:
            if (i) return d.intl.string(d.t["pZ/fYa"]);
            if ((0, l.A)(e)) return d.intl.string(d.t.gfVCfL);
            return d.intl.string(d.t.seKITE);
        case c.rbe.GUILD_STAGE_VOICE:
            if (n) return d.intl.string(d.t.ZjZB3r);
            if ((0, l.A)(e)) return d.intl.string(d.t["7pRuCQ"]);
            return d.intl.string(d.t.eJFSiN);
        case c.rbe.GUILD_VOICE:
            if (n) return d.intl.string(d.t.xY8Wth);
            if ((0, l.A)(e)) return d.intl.string(d.t.qaY8Dm);
            return d.intl.string(d.t["0kBmow"]);
        case c.rbe.GUILD_ANNOUNCEMENT:
            if (i) return d.intl.string(d.t.eRc6o9);
            if ((0, l.A)(e)) return d.intl.string(d.t.EHLQwl);
            return d.intl.string(d.t.GtDRi2);
        case c.rbe.GUILD_STORE:
            return d.intl.string(d.t.Ea4NDL);
        case c.rbe.DM:
            return d.intl.string(d.t.jN2DfZ);
        case c.rbe.GROUP_DM:
            return d.intl.string(d.t["e5y+gm"]);
        case c.rbe.GUILD_DIRECTORY:
            return d.intl.string(d.t.IzZTIe);
        case c.rbe.PUBLIC_THREAD:
            return d.intl.string(d.t["7Xm5QI"]);
        case c.rbe.PRIVATE_THREAD:
            return d.intl.string(d.t.F1zyvU);
        default:
            return null;
    }
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: d = !1, video: _ = !1, stream: f = !1, hasActiveThreads: p = !1, textFocused: h = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.A.getGuild(e.getGuildId()));
    let m = (0, i.V)(t?.id, [s.A, o.default, a.Ay]);
    if (e.isModeratorReportChannel()) return r.iFK;
    if (e?.id === t?.rulesChannelId) return r.B8Q;
    let g = e.isNSFW();
    switch (e.type) {
        case c.rbe.GUILD_ANNOUNCEMENT:
            if (p)
                if (g) return r.Md2;
                else if ((0, l.A)(e)) return r.XDC;
                else return r.koX;
            if (g) return r.Md2;
            if ((0, l.A)(e)) return r.XDC;
            return r.koX;
        case c.rbe.GUILD_STORE:
            return r.gqV;
        case c.rbe.DM:
        case c.rbe.GROUP_DM:
            return r.XxR;
        case c.rbe.PRIVATE_THREAD:
            return r.tn0;
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.PUBLIC_THREAD:
            if (g) return r.mF0;
            if (e.isForumPost()) return r.oyn;
            return r.ysw;
        case c.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return r.xxB;
            if (g) return r.rYc;
            if ((0, l.A)(e)) return r.I$d;
            return r.N$i;
        case c.rbe.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (g) return E ? r.DAq : r.fil;
            if ((0, l.A)(e)) return E ? r.cfi : r.QVg;
            return E ? r.xfq : r.bSJ;
        case c.rbe.GUILD_MEDIA:
            if (g) return r.DAq;
            if ((0, l.A)(e)) return r.cfi;
            return r.xfq;
        case c.rbe.GUILD_STAGE_VOICE:
            if (m) return (0, l.A)(e) ? r.XAi : r.DC;
            if (d) return r.XAi;
            if ((0, l.A)(e)) return r.DC;
            else return r.qux;
        case c.rbe.GUILD_VOICE:
            if (h) return r.oyn;
            if (g) return r.Ob$;
            if (f) return r.Fzq;
            if (m)
                if ((0, l.A)(e)) return r.XAi;
                else return _ ? r.kIp : r.trU;
            if (d) return r.XAi;
            if ((0, l.A)(e)) return _ ? r.kIp : r.trU;
            else return _ ? r.npA : r.HKD;
        case c.rbe.GUILD_DIRECTORY:
            return r.Pfh;
        case c.rbe.GUILD_CATEGORY:
            return r.sjq;
        default:
            if (u.aQ.has(e.id)) {
                if (e.id === u.T4.GUILD_HOME || e.id === u.T4.SERVER_GUIDE) return r.Zf8;
                else if (e.id === u.T4.CHANNEL_BROWSER || e.id === u.T4.CUSTOMIZE_COMMUNITY) return r.kiI;
            }
            return null;
    }
}
function p(e) {
    switch (e) {
        case c.rbe.GUILD_ANNOUNCEMENT:
            return r.koX;
        case c.rbe.GUILD_STORE:
            return r.gqV;
        case c.rbe.DM:
        case c.rbe.GROUP_DM:
            return r.XxR;
        case c.rbe.PRIVATE_THREAD:
            return r.tn0;
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.PUBLIC_THREAD:
            return r.ysw;
        case c.rbe.GUILD_TEXT:
        case c.rbe.GUILD_FORUM:
        case c.rbe.GUILD_MEDIA:
            return r.N$i;
        case c.rbe.GUILD_STAGE_VOICE:
            return r.qux;
        case c.rbe.GUILD_VOICE:
            return r.HKD;
        case c.rbe.GUILD_CATEGORY:
            return r.sjq;
        default:
            return null;
    }
}

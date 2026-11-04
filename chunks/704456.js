var a,
    i = t(582128),
    l = t(536637),
    u = t.n(l),
    d = t(855986),
    r = t(308528),
    s = t(362280),
    c = t(95701),
    h = t(46653),
    g = t(734057),
    o = t(652215),
    p = t(792996),
    I = (((a = {})[(a.LONG = 0)] = "LONG"), (a[(a.SHORT = 1)] = "SHORT"), a);
t.d(
    n,
    {},
    {
        Ce: function (e) {
            let { dueAt: n, now: t, type: a } = e;
            if (null == n) return { string: "", isOverdue: !1 };
            let i = 0 === a ? p.t.TjNWNF : p.t.H4gnX9,
                l = 0 === a ? p.t.haia16 : p.t["Uq7Y+7"],
                d = t > n;
            return {
                dueInText: p.intl.formatToPlainString(d ? l : i, {
                    duration: u()
                        .duration(n.getTime() - t.getTime(), "millisecond")
                        .humanize(),
                }),
                isOverdue: d,
            };
        },
        kh: I,
        le: async function (e, n) {
            if (null == e.saveData.guildId && null == g.A.getChannel(e.saveData.channelId))
                try {
                    let n = await r.A.fetchChannel(e.saveData.channelId);
                    if (null == n.recipients || n.recipients.length > 1) return;
                    await r.A.ensurePrivateChannel(n.recipients.map((e) => e.id));
                } catch (e) {}
            (0, s.A)(o.BVt.CHANNEL(n?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
        },
        vr: function (e) {
            let n = (0, d.bG)([g.A], () => g.A.getChannel(e.saveData.channelId)),
                t = (0, d.bG)([h.default], () => h.default.getId());
            return i.useMemo(() => {
                if (null != n) return n;
                let { message: a, saveData: i } = e;
                if (null != a)
                    return null == i.guildId && a.author.id !== t
                        ? new c.cq({
                              id: i.channelId,
                              type: o.rbe.DM,
                              name: "",
                              guild_id: null,
                              recipients: [a.author.id],
                          })
                        : new c.jb({
                              id: i.channelId,
                              guild_id: i.guildId,
                              type: o.rbe.UNKNOWN,
                              name: p.intl.string(p.t.J90oLW),
                          });
            }, [n, e, t]);
        },
    },
);

var t = e(406704),
    c = e(576705),
    o = e(143413),
    r = e(652215);
e.d(
    i,
    {},
    {
        A: function (n, i) {
            let e = !i.isSystemDM() && !(0, o.A)(n),
                a = c.A.can(r.xBc.PIN_MESSAGES, i) && c.A.can(r.xBc.READ_MESSAGE_HISTORY, i);
            return (
                e &&
                (a || i.isPrivate()) &&
                (0, t.jr)(i) &&
                i.type !== r.rbe.GUILD_VOICE &&
                i.type !== r.rbe.GUILD_STAGE_VOICE &&
                i.type !== r.rbe.MEDIA_THREAD
            );
        },
    },
);

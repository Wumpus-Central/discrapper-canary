var a = e(164636),
    r = e(734057),
    l = e(746080);
e.d(
    t,
    {},
    {
        A: function (n) {
            let t = (0, a.bG)([r.A], () => {
                let t = r.A.getChannel(n);
                return t?.parent_id != null && t.isForumPost() ? r.A.getChannel(t?.parent_id) : null;
            });
            return t?.hasFlag(l.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS) === !0;
        },
    },
);

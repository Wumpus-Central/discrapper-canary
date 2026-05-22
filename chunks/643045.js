n.d(t, { I: () => m });
var i = n(64700),
    l = n(17928),
    s = n(970928),
    r = n(835517),
    a = n(228366),
    o = n(635377);
let d = new (n.n(o)())({ max: 500 });
class c extends l.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return d.get(t);
    }
}
let u = new c(a.h, {
        SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
            let { messageId: t, coverImageURL: n } = e;
            if (d.get(t) === n) return !1;
            d.set(t, n);
        },
    }),
    m = (e) => {
        let { messageId: t, presenceActivity: n, application: o } = e,
            { cachedImageURL: d, imageURL: c } = (0, l.cf)(
                [u],
                () =>
                    ((e) => {
                        let { messageId: t, presenceActivity: n, application: i } = e,
                            l = u.getCoverImageURL({ messageId: t });
                        if (null === l) return { cachedImageURL: null, imageURL: null };
                        let a = 600 * (0, r.A)(),
                            o =
                                (n?.assets?.invite_cover_image != null
                                    ? (0, s.uD)(n.application_id, n.assets.invite_cover_image, a)
                                    : null) ??
                                l ??
                                i.getCoverImageURL(a) ??
                                null;
                        return { cachedImageURL: l, imageURL: o };
                    })({ messageId: t, presenceActivity: n, application: o }),
                [t, n, o],
            );
        return (
            i.useEffect(() => {
                d !== c &&
                    (function (e) {
                        let { messageId: t, coverImageURL: n } = e;
                        a.h.dispatch({
                            type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                            messageId: t,
                            coverImageURL: n,
                        });
                    })({ messageId: t, coverImageURL: c });
            }, [d, c, t]),
            c
        );
    };

var i = t(256905),
    n = t(188567),
    l = t(652215);
let s = { width: 1920, height: 1080 };
t.d(
    a,
    {},
    {
        A: async function (e) {
            let { clips: a, startingIndex: t } = e;
            if (0 === a.length) return;
            let r = a.length > 1,
                c = await Promise.all(
                    a.map((e) =>
                        (async function (e, a) {
                            let {
                                    key: t,
                                    gameId: i,
                                    videoURL: r,
                                    thumbnailURL: c,
                                    title: o,
                                    spritesheetImageURL: d,
                                    spritesheetVttURL: u,
                                    clipEventsTimeline: m,
                                } = e,
                                { width: p, height: g } = await (async function (e) {
                                    if (null == e) return s;
                                    try {
                                        let { width: a, height: t } = await new Promise((a, t) => {
                                            let i = new Image();
                                            ((i.onload = () => a({ width: i.naturalWidth, height: i.naturalHeight })),
                                                (i.onerror = () => t(Error("measureImage: the image failed to load"))),
                                                (i.src = e));
                                        });
                                        return a > 0 && t > 0 ? { width: a, height: t } : s;
                                    } catch {
                                        return s;
                                    }
                                })(c);
                            return {
                                type: "VIDEO",
                                url: r,
                                proxyUrl: r,
                                poster: c,
                                width: p,
                                height: g,
                                alt: o,
                                clip: {
                                    id: t,
                                    url: r,
                                    width: p,
                                    height: g,
                                    title: o,
                                    application: { id: i },
                                    spritesheet_image_url: d,
                                    spritesheet_vtt_url: u,
                                    clip_events_timeline: m,
                                },
                                onEnded: a ? () => n._.dispatch(l.jej.MODAL_CAROUSEL_NEXT) : void 0,
                            };
                        })(e, r),
                    ),
                );
            (0, i.R)({ location: "user_profile_widget_clip", items: c, startingIndex: t, shouldHideMediaOptions: !0 });
        },
    },
);

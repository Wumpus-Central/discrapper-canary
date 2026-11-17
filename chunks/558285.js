var i = a(256905),
    s = a(188567),
    n = a(652215);
let l = { width: 1920, height: 1080 };
a.d(
    t,
    {},
    {
        A: async function (e) {
            let { clips: t, startingIndex: a } = e;
            if (0 === t.length) return;
            let r = t.length > 1,
                u = await Promise.all(
                    t.map((e) =>
                        (async function (e, t) {
                            let {
                                    key: a,
                                    gameId: i,
                                    videoURL: r,
                                    thumbnailURL: u,
                                    title: d,
                                    spritesheetImageURL: o,
                                    spritesheetVttURL: c,
                                    clipEventsTimeline: p,
                                } = e,
                                { width: h, height: m } = await (async function (e) {
                                    if (null == e) return l;
                                    try {
                                        let { width: t, height: a } = await new Promise((t, a) => {
                                            let i = new Image();
                                            ((i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
                                                (i.onerror = () => a(Error("measureImage: the image failed to load"))),
                                                (i.src = e));
                                        });
                                        return t > 0 && a > 0 ? { width: t, height: a } : l;
                                    } catch {
                                        return l;
                                    }
                                })(u);
                            return {
                                type: "VIDEO",
                                url: r,
                                proxyUrl: r,
                                poster: u,
                                width: h,
                                height: m,
                                alt: d,
                                clip: {
                                    id: a,
                                    url: r,
                                    width: h,
                                    height: m,
                                    title: d,
                                    application: { id: i },
                                    spritesheet_image_url: o,
                                    spritesheet_vtt_url: c,
                                    clip_events_timeline: p,
                                },
                                onEnded: t ? () => s._.dispatch(n.jej.MODAL_CAROUSEL_NEXT) : void 0,
                            };
                        })(e, r),
                    ),
                );
            (0, i.R)({ location: "user_profile_widget_clip", items: u, startingIndex: a, shouldHideMediaOptions: !0 });
        },
    },
);

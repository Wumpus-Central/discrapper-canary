var i = t(582128);
t.d(
    a,
    {},
    {
        A: function (e) {
            return i.useMemo(
                () =>
                    e.clips.map((e) => {
                        switch (e.status) {
                            case "saved":
                                return {
                                    status: "saved",
                                    key: e.id,
                                    gameId: e.gameId,
                                    videoURL: e.videoURL,
                                    thumbnailURL: e.thumbnailURL,
                                    spritesheetImageURL: e.spritesheetImageURL,
                                    spritesheetVttURL: e.spritesheetVttURL,
                                    clipEventsTimeline: e.clipEventsTimeline,
                                    title: e.title,
                                    tags: e.tags,
                                };
                            case "pending":
                                return {
                                    status: "pending",
                                    key: e.id,
                                    gameId: e.gameId,
                                    thumbnail: e.thumbnail,
                                    title: e.title,
                                    tags: e.tags,
                                };
                            case "uploading":
                                return { status: "uploading", key: e.id, gameId: e.gameId, thumbnail: e.thumbnail };
                        }
                    }),
                [e.clips],
            );
        },
        K: function (e) {
            return "saved" === e.status && null != e.videoURL;
        },
    },
);

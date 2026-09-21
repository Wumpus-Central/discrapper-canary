t.d(a, { A: () => l, K: () => n });
var i = t(582128);
function n(e) {
    return "saved" === e.status && null != e.videoURL;
}
function l(e) {
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
}

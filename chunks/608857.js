n.d(a, { A: () => l, K: () => i });
var t = n(582128);
function i(e) {
    return "saved" === e.status && null != e.videoURL;
}
function l(e) {
    return t.useMemo(
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

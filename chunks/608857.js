a.d(t, { A: () => s, K: () => l });
var i = a(582128),
    n = a(282988);
function l(e) {
    return "saved" === e.status && null != e.videoURL;
}
function s(e) {
    let t = (0, n.UQ)();
    return i.useMemo(
        () => [
            ...e.clips.flatMap((e) => {
                if ("saved" === e.status)
                    return [
                        {
                            status: "saved",
                            key: e.id,
                            gameId: e.gameId,
                            videoURL: e.videoURL,
                            thumbnailURL: e.thumbnailURL,
                            title: e.title,
                            tags: e.tags,
                        },
                    ];
                let a = t.get(e.id);
                return null != a
                    ? [
                          {
                              status: "pending",
                              key: e.id,
                              gameId: e.gameId,
                              thumbnail: a.clip.thumbnail,
                              title: e.title,
                              tags: e.tags,
                          },
                      ]
                    : [];
            }),
            ...Array.from(t).flatMap((e) => {
                let [t, a] = e;
                switch (a.status) {
                    case "exporting":
                        return [{ status: "exporting", key: t, thumbnail: a.clip.thumbnail }];
                    case "uploading":
                        return [{ status: "uploading", key: t, thumbnail: a.clip.thumbnail, progress: a.progress }];
                    case "uploaded":
                        return [];
                }
            }),
        ],
        [e.clips, t],
    );
}

a.d(t, { A: () => s, K: () => n });
var l = a(582128),
    i = a(282988);
function n(e) {
    return "saved" === e.status && null != e.videoURL;
}
function s(e) {
    let t = (0, i.UQ)();
    return l.useMemo(
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
                let a = t.get(e.localClipId);
                return null != a
                    ? [
                          {
                              status: "pending",
                              key: e.id,
                              gameId: e.gameId,
                              localClipId: e.localClipId,
                              thumbnail: a.clip.thumbnail,
                              title: e.title,
                              tags: e.tags,
                          },
                      ]
                    : [];
            }),
            ...Array.from(t.values()).flatMap((e) => {
                switch (e.status) {
                    case "exporting":
                        return [{ status: "exporting", key: e.clip.id, thumbnail: e.clip.thumbnail }];
                    case "uploading":
                        return [
                            { status: "uploading", key: e.clip.id, thumbnail: e.clip.thumbnail, progress: e.progress },
                        ];
                    case "uploaded":
                        return [];
                }
            }),
        ],
        [e.clips, t],
    );
}

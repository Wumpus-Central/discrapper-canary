(n.d(t, { Z: () => a }), n(415506), n(388685));
var r = n(141795),
    i = n(981631);
async function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = e.map(
            (e) =>
                new Promise((a, o) => {
                    switch (e.status) {
                        case r.m.NOT_STARTED:
                            e.upload();
                            break;
                        case r.m.COMPLETED:
                            a('complete');
                            break;
                        case r.m.ERROR:
                            t && e.error !== i.evJ.ENTITY_TOO_LARGE ? e.upload() : o(Error('File failed to upload'));
                            break;
                        case r.m.CANCELED:
                            o(Error('Upload is canceled'));
                    }
                    (e.on('complete', () => {
                        a('complete');
                    }),
                        e.on('error', () => {
                            o(Error('File '.concat(e.id, ' failed to upload')));
                        }),
                        e.on('progress', (e, t) => {
                            null == n || n(e, t);
                        }));
                })
        );
    await Promise.all(a);
}

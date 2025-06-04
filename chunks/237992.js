n.d(t, { Z: () => o }), n(415506), n(388685);
var r = n(141795),
    i = n(981631);
async function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = e.map(
            (e) =>
                new Promise((o, a) => {
                    switch (e.status) {
                        case r.m.NOT_STARTED:
                            e.upload();
                            break;
                        case r.m.COMPLETED:
                            o('complete');
                            break;
                        case r.m.ERROR:
                            t && e.error !== i.evJ.ENTITY_TOO_LARGE ? e.upload() : a(Error('File failed to upload'));
                            break;
                        case r.m.CANCELED:
                            a(Error('Upload is canceled'));
                    }
                    e.on('complete', () => {
                        o('complete');
                    }),
                        e.on('error', () => {
                            a(Error('File '.concat(e.id, ' failed to upload')));
                        }),
                        e.on('progress', (e, t) => {
                            null == n || n(e, t);
                        });
                })
        );
    await Promise.all(o);
}

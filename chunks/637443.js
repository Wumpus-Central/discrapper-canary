n.d(t, {
    ShopAssetsPreviewInstructionModal: () => d,
    ShopPFXPreviewInstructionModal: () => u,
    c: () => c,
    g: () => s
});
var r = n(200651);
n(192379);
var a = n(466377),
    l = n(481060),
    i = n(281598),
    o = n(152906);
let s = 'shop-assets-preview-instructions-modal',
    c = 'shop-pfx-preview-instructions-modal',
    d = (e) => {
        let { transitionState: t } = e;
        return (0, r.jsxs)(a.Y0, {
            size: a.Cg.DYNAMIC,
            transitionState: t,
            className: o.modalRoot,
            children: [
                (0, r.jsx)(a.xB, {
                    className: o.modalHeader,
                    children: (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        children: 'Upload Instructions'
                    })
                }),
                (0, r.jsxs)(a.hz, {
                    className: o.modalContent,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: 'Upload Shop assets for preview in the app!'
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.'
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'These are only visible to you. Reloading the app will reset the state.'
                        }),
                        (0, r.jsx)(l.LZC, { size: 4 }),
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid Upload Types'
                        }),
                        (0, r.jsxs)('ul', {
                            className: o.instructionsList,
                            children: [(0, r.jsx)('li', { children: 'One or more image or video files (jpg, png, webm)' }), (0, r.jsx)('li', { children: 'A folder containing image or video files' })]
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid File Names'
                        }),
                        (0, r.jsx)('ul', {
                            className: o.instructionsList,
                            children: Object.keys(i.Kj).map((e) => (0, r.jsx)('li', { children: e }, e))
                        })
                    ]
                }),
                (0, r.jsx)(a.mz, {})
            ]
        });
    },
    u = (e) => {
        let { transitionState: t } = e;
        return (0, r.jsxs)(a.Y0, {
            size: a.Cg.DYNAMIC,
            transitionState: t,
            className: o.modalRoot,
            children: [
                (0, r.jsx)(a.xB, {
                    className: o.modalHeader,
                    children: (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        children: 'PFX Preview Instructions'
                    })
                }),
                (0, r.jsxs)(a.hz, {
                    className: o.modalContent,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: '1. Draft your PFX in the PFX Editor (in User Settings)'
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: '2. In this devtools dropdown, select one of your PFX drafts'
                        }),
                        (0, r.jsx)(l.LZC, { size: 8 }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied).'
                        }),
                        (0, r.jsx)(l.LZC, { size: 8 }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.'
                        })
                    ]
                }),
                (0, r.jsx)(a.mz, {})
            ]
        });
    };
